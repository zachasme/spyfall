const http = require('http')
const router = require('./shared/router')

const server = http.createServer(function requestListener(request, response) {
  const route = router.resolve(request.url)
})

require('chokidar-socket-emitter')({ port: 1338 })
server.listen(1337)
