import React, { Component } from 'react'
import { connect } from 'react-redux'

import { gameCreate, gameJoin } from '../actions'

@connect(state => {
  const { spyfall } = state
  return {
    games: spyfall.get('games'),
  }
})
export default class Browser extends Component {
  render() {
    const { dispatch, games } = this.props
    return (
      <div>
        <h1>Spyfall</h1>
        <button type="button" onClick={ e => dispatch(gameCreate()) }>Start new game</button>
        <p>or</p>
        <h3>Join game</h3>
        <label><input type="radio" name="joinmethod" /> Games near you</label>
        <label><input type="radio" name="joinmethod" /> Access code</label>
        <label><input type="radio" name="joinmethod" /> QR-codes</label>
        <ol>
          {games.map(game => (
            <li><button onClick={() => dispatch(gameJoin(game))}>Dickbutts game (3 players)</button></li>
          ))}
        </ol>
      </div>
    )
  }
}
