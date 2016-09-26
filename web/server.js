'use strict'
const httpServer = require('http-server')

let cache = 3600
if (process.env.NODE_ENV === 'production') {
  console.log('running in production mode(with caching)-make sure you have "Disable cache (while DevTools is open)" checked in the browser to see the changes while developing')
} else {
  cache = -1
}
const server = httpServer.createServer({
  root: 'serve',
  cache: cache,
  robots: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true'
  }
})

let games = ['lol']
const io = require('socket.io')(server.server);
io.on('connection', function(socket){
  socket.emit('games', games)

  socket.on('gamecreated', game => {
    console.log('new game', game)
    games.push(game)
    socket.emit('games', games)
  })

  socket.on('gamejoined', game => {
    console.log('palyer joined', game)
    socket.join(game)
    io.sockets.in(game).emit('game', {yo:1})
  })
});

require('chokidar-socket-emitter')({port: 1338})

server.listen(1337)
