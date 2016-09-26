import React, { Component } from 'react'
import { connect } from 'react-redux'

import { gameLeave, gameStart } from '../actions'

import PlayerList from './player_list'
import GameSettings from './game_settings'

@connect(state => {
  const { spyfall } = state
  return {
    players: spyfall.getIn(['game','players']),
  }
})
export default class Lobby extends Component {
  render() {
    const { dispatch, players } = this.props
    return (
      <div>
        <button type="button" onClick={() => dispatch(gameStart())}>Start game</button>
        <button type="button" onClick={() => dispatch(gameLeave())}>Leave game</button>
        <PlayerList players={players} />
        <GameSettings />
      </div>
    )
  }
}
