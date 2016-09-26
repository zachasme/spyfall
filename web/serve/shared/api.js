import { gameListRecieve, gameUpdate } from './actions'
import io from 'socket.io-client'
const socket = io()

let GAMES = []
const STORES = []

/**
 * Connects store to APIs and starts connecting to servers/peers
 */
export async function subscribe(dispatch) {
  STORES.push(dispatch)

  // attempt connecting to central server
  try {
    const central = await connect()

    central.on('games', games => {
      dispatch(gameListRecieve(games))
    });
  } catch (error) {
    dispatch({ type: 'central_error' })
  }
}

export function gameCreate(game) {
  socket.emit('gamecreated', game)
}

export async function gameJoin(game) {
  socket.emit('gamejoined', game);
  // attempt connecting to all peers
  try {
    const central = await connect()

    central.on('game', games => {
      dispatch(gameListRecieve(games))
    });
  } catch (error) {
    dispatch({ type: 'peer_error' })
  }
}

export function gameStart(game) {
  peers.broadcast(game)
}

export function gameStop(game) {
  // broadcast stop to all peers
}
