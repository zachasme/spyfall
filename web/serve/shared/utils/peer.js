/**
 * This file is for abstracting away user connections
 *
 * This file should accomplish two tasks:
 * 1) Make p2p connections possible
 * 2) Try to access a signalling server with a room list
 */


const room = signaller.createRoom()
room.onoffer = offer => {
  const { connection, answer } = accept(offer)
  signaller.sendAnswer(answer)
}



export function connectToPeer() {

}

const peers = [];

export async function setup() {
    const cfg = { 'iceServers': [] }
    const con = { 'optional': [{ 'RtpDataChannels': true }] }

    const connection = new RTCPeerConnection(cfg, con)
    const channel = connection.createDataChannel()

    connection.onconnection = e => console.log('connected')

    connection.onicecandidate = function (e) {
      signaller.sendCandidate(e.candidate)
    };

    const offer = await connection.createOffer()
    await connection.setLocalDescription(offer)

    // SEND/RECIEVE TO/FROM PEER
    signaller.sendOffer(offer)
    const answer = await signaller.getAnswer()

    await connection.setRemoteDescription(answer)
}

/**
 * Accept an offer from a peer and return the connection along with answer
 */
async function accept(offer){
  const connection = new RTCPeerConnection(cfg, con)

  connection.ondatachannel = function (e) {
    const channel = e.channel || e; // Chrome sends event, FF sends raw channel
    channel.onmessage = function (e) {
      console.log("Client got message", e.data);
    };
  };

  await connection.setRemoteDescription(offer)
  const answer = await connection.createAnswer()
  await connection.setLocalDescription(answer)

  return { connection, answer }
}
