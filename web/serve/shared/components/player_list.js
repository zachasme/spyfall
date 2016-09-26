import React from 'react'

export default function Locations(props) {
  const {players} = props
  return (
    <div>
      <h3>Players</h3>
      <ol>
        {players.map(player => (
          <li>{player}</li>
        ))}
      </ol>
    </div>
  )
}
