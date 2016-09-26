import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import injectTapEventPlugin from 'react-tap-event-plugin'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/lib/locale-data/en'
addLocaleData(en)
// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

import Spyfall from './components/spyfall'
import createStore from './store'
import { setup } from './actions'
import * as api from './api'

class RenderForcer extends React.Component {
  componentWillMount() {
    this.forceUpdate()  // a little hack to help us rerender when this module is reloaded
  }
  render() {
    return (
      <IntlProvider locale="en">
        <Provider store={this.props.store}>
          <Spyfall />
        </Provider>
      </IntlProvider>
    )
  }
}

const store1 = createStore()
ReactDOM.render((
  <RenderForcer store={store1}/>
), document.getElementById('app1'))
api.subscribe(store1.dispatch)

const store2 = createStore()
ReactDOM.render((
  <RenderForcer store={store2}/>
), document.getElementById('app2'))
api.subscribe(store2.dispatch)
