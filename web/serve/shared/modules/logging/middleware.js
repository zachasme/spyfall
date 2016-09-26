import { Iterable } from 'immutable'

const log = console.log

export default store => next => action => {
  log('dispatching', action)

  const nextAction = next(action)
  const state = store.getState()

  // support immutablejs
  log('new state', Object.keys(state).reduce((accumulator, key) => {
    const reducer = state[key]
    accumulator[key] = Iterable.isIterable(reducer) ? reducer.toJS() : reducer
    return accumulator
  }, {}))

  return nextAction
}
