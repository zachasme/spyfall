import React, { Component } from 'react'
import { connect } from 'react-redux'

import Link from '../modules/routing/components/link'

import { STATE_NOGAME, STATE_INGAME } from '../constants'
import { gameCreate } from '../actions'

import Browser from './browser'
import Lobby from './lobby'
import Game from './game'

@connect(state => {
  const { spyfall, routing } = state
  return {
    gamestate: spyfall.get('gamestate'),
    game: spyfall.get('game'),
    location: routing.location,
  }
})
export default class Spyfall extends Component {
  render() {
    let display = 'lol'
    const { location, game, gamestate } = this.props
    if (location === '/about') {
      display = 'about'
    } else {
      if (gamestate === STATE_NOGAME) {
        display = <Browser />
      }
      if (gamestate === STATE_INGAME) {
        if (game.get('started')) {
          display = <Game />
        } else {
          display = <Lobby />
        }
      }
    }
    return (
      <div>
        <h1>Spyfall</h1>
        {display}
        <p><Link pathname='/about'>about</Link></p>
      </div>
    )
  }
}
