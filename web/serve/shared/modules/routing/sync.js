import { pushLocation } from './actions'

export default function sync(store, history) {
  const unsubscribeStore = store.subscribe(() => {
    const routing = store.getState().get('routing')
    history.push(routing.location)
  })

  const unsubscribeHistory = history.listen(location => {
    store.dispatch(pushLocation(location))
  })

  return function unsubcribe() {
    unsubscribeHistory()
    unsubscribeStore()
  }
}
