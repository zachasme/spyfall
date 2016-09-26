import http from 'http'
import router from '../shared/router'

const PORT = 1337

const server = http.createServer(async (request, response) => {
  const route = router.match(request.url)

  // create new store instance
  const store = createStore(counterApp)
  const html = renderToString(<App store={store} />)

  // Grab the initial state from our Redux store
  const initialState = store.getState()
  store.dispatch(navigate(request.url))

  // Send the rendered page back to the client
  res.send(renderFullPage(html, initialState))

  await route.fetchData()

  response.end('lol')
})

server.listen(PORT)
