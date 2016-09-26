/**
 * This module should provide a method for starting an instance of the
 * application. It should be possible to run diffing and action handling in
 * separate thread.
 *
 * Two parts:
 *   UI thread
 *   Logic thread
 */
import createStore from './store'
import router from './router'

export async function derp(url, options){
  // create new store instance
  const store = createStore(counterApp)

  // handle routing
  const route = await router.route(url, store)

  const html = renderToString(<App store={store} />)

  // Grab the initial state from our Redux store
  const initialState = store.getState()
  store.dispatch(navigate(request.url))

  // Send the rendered page back to the client
  res.send(renderFullPage(html, initialState))

  await route.fetchData()

  response.end('lol')
}

export function syncUiAndStore(ui, store) {
  store.subscribe(ui.patch)
  ui.subscribe(store.dispatch)
}
