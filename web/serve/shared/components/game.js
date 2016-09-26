import React, { Component } from 'react'
import { connect } from 'react-redux'

import Identity from './identity'
import LocationList from './location_list'
import PlayerList from './player_list'
import Timer from './timer'

import { gameStop, gameLeave } from '../actions'

@connect(state => {
  const { spyfall } = state
  return {
    players: spyfall.getIn(['game', 'players']),
  }
})
export default class Game extends Component {
  render() {
    const { dispatch, players } = this.props
    return (
      <div>
        <Timer />
        <Identity />
        <PlayerList players={players} />
        <button type="button" onClick={() => dispatch(gameStop())}>Stop game</button>
        <button type="button" onClick={() => dispatch(gameLeave())}>Leave game</button>
      </div>
    )
  }
}
