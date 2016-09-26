import * as api from './api'

import {
  ACTION_GAME_LIST_RECIEVED,
  ACTION_GAME_CREATED,
  ACTION_GAME_JOINED,
  ACTION_GAME_UPDATED,
  ACTION_GAME_STARTED,
  ACTION_GAME_STOPPED,
  ACTION_GAME_LEFT,
} from './constants'

export function gameListRecieve(games) {
  return { type: ACTION_GAME_LIST_RECIEVED, games }
}

export function gameCreate() {
  api.gameCreate('lol')
  return { type: ACTION_GAME_CREATED }
}

export function gameJoin(game) {
  api.gameJoin(game)
  return { type: ACTION_GAME_JOINED, game }
}

export function gameUpdate(game) {
  return { type: ACTION_GAME_UPDATED, game }
}

export function gameStart() {
  // const state = utils.freshGame()
  // peer.broadcast(state)

  return { type: ACTION_GAME_STARTED }
}

export function gameStop() {
  return { type: ACTION_GAME_STOPPED }
}

export function gameLeave() {
  return { type: ACTION_GAME_LEFT }
}










import { RTCPeerConnection, RTCSessionDescription } from 'webrtc-adapter'

/*
A            |    signaling    |          B
-----------------------|:---------------:|-------------------------
creates peerconnection |                 |
creates datachannel    |                 |
creates offer          |                 |
                       |---- offer ----> |
                       |                 |creates peerconnection
                       |                 |creates datachannel
                       |                 |creates answer with offer
                       |<---- answer ----|
processing Answer      |                 |
datachannel opens      |                 |datachannel opens
*/





async function setup() {
  const cfg = { 'iceServers': [] }
  const con = { 'optional': [{ 'RtpDataChannels': true }] }

  const answerer = new RTCPeerConnection(cfg, con)
  const offerer = new RTCPeerConnection(cfg, con)

  const channel = offerer.createDataChannel('test', { reliable: true });

  answerer.onconnection = e => console.log('connected')
  offerer.onconnection = e => console.log('connected')

  answerer.onicecandidate = function (e) {
    console.log("answerering getting ICE candidate", e);
    if (e.candidate) {
      offerer.addIceCandidate(e.candidate)
    }
  };
  offerer.onicecandidate = function (e) {
    console.log("offerer getting ICE candidate", e);
    if (e.candidate) {
      answerer.addIceCandidate(e.candidate)
    }
  };

  answerer.ondatachannel = function (e) {
    const answererChannel = e.channel || e; // Chrome sends event, FF sends raw channel
    console.log("Received datachannel (answerer)");
    answererChannel.onopen = function (e) {
      console.log('data channel connect');
    }
    answererChannel.onmessage = function (e) {
      console.log("Got message (answererChannel)", e.data);
    };
  };

  const offer = await offerer.createOffer()
  console.log("offer", offer)
  await offerer.setLocalDescription(offer)

  await answerer.setRemoteDescription(offer)
  const answer = await answerer.createAnswer()
  console.log("answer", answer)
  await answerer.setLocalDescription(answer)
  await offerer.setRemoteDescription(answer)
}

//setup()
