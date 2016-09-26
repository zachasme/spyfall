import React, { Component } from 'react'

import spyfall from '../spyfall.json!'

export default class GameSettings extends Component {
  render() {
    return (
      <div>
        <h3>Settings</h3>
        <form>
          <fieldset>
            <legend>Locations</legend>
            <ol>
              {spyfall.locations.map(location => (
                <li><label><input type="checkbox" />{location.name}</label></li>
              ))}
            </ol>
          </fieldset>
        </form>
      </div>
    )
  }
}
