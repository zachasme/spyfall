import Immutable from 'immutable'
import {
  STATE_NOGAME,
  STATE_INGAME,
  ACTION_GAME_LIST_RECIEVED,
  ACTION_GAME_CREATED,
  ACTION_GAME_STARTED,
  ACTION_GAME_STOPPED,
  ACTION_GAME_LEFT,
} from '../constants'

const initialState = Immutable.fromJS({
  gamestate: STATE_NOGAME,

  games: [],

  game: {
    started: false,
    created: Date.now(),
    players: [],
    rounds: 0,
    round: {
      started: Date.now(),
      location: '',
      players: [],
      spy: '',
    },
  },
})

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case ACTION_GAME_LIST_RECIEVED:
    return state.set('games', action.games)
  case ACTION_GAME_CREATED:
    return state
      .set('gamestate', STATE_INGAME)
      .setIn(['game', 'started'], false)
  case ACTION_GAME_STARTED:
    return state.setIn(['game', 'started'], true)
  case ACTION_GAME_STOPPED:
    return state.setIn(['game', 'started'], false)
  case ACTION_GAME_LEFT:
    return state.set('gamestate', STATE_NOGAME)
  default:
    return state
  }
}
