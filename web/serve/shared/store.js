import { createStore, applyMiddleware, combineReducers } from 'redux'

import logger from './modules/logging/middleware'
import thunker from './middleware/thunker'

import routingReducer from './modules/routing/reducer'
import spyfallReducer from './reducers/spyfall'

const middleware = [
  logger,
  thunker,
]
const reducers = {
  spyfall: spyfallReducer,
  routing: routingReducer,
}

export default function () {
  return applyMiddleware(...middleware)(createStore)(combineReducers(reducers))
}
