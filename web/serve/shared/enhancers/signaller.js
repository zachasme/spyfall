import connect from './connect'

export default function signaller() {
  return (next) => (reducer, initialState) => {
    const store = next(reducer, initialState)
    const { dispatch, subscribe } = store

    const peers = {}

    subscribe(async () => {
      try {
        peers = await connect()
      } catch (error) {
        dispatch('error')
      }
    })

    return store
  }
}
