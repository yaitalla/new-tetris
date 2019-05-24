const fs = require('fs')
const debug = require('debug')
const socketEngine = require('./socketEngine');

let userlist = [];
let roomlist = [];

const logerror = debug('tetris:error')
  , loginfo = debug('tetris:log')

const initApp = (app, params, cb) => {
  const {host, port} = params
  const handler = (req, res) => {
    const file = req.url === '/bundle.js' ? '/../../build/bundle.js' : '/../../index.html'
    loginfo('file to read: ' + file)
    loginfo('ici')
    fs.readFile(__dirname + file, (err, data) => {
      if (err) {
        logerror(err)
        res.writeHead(500)
        return res.end('Error loading index.html')
      }
      res.writeHead(200)
      res.end(data)
    })
  }
  app.on('request', handler)
  app.listen({host, port}, () =>{
    loginfo(`tetris listen on ${params.url}`)
    cb()
  })
}

const initEngine = io => {
  io.on('connection', (socket) => {
    loginfo("User connected: " + socket.id)
    // io.emit('SERVER_MESSAGE', 'new connection: '+socket.id)
    if (userlist.indexOf(socket.id) == -1){
        userlist.push(socket.id)
    }
    io.emit('USERS_UPDATE', userlist)
    //io.to(socket.id).emit('USER_ID', socket.id);
    socket.emit('USER_ID', socket.id)
    socket.on('disconnect', (action) => {
        userlist.splice(userlist.indexOf(socket.id), 1);
        io.emit('USERS_UPDATE', userlist)
        loginfo("User disconnected: " + socket.id)
    })
  })
}

const create = (params) =>{
  const promise = new Promise( (resolve, reject) => {
    const app = require('http').createServer()
    initApp(app, params, () =>{
      const io = require('socket.io')(app)
      const stop = (cb) => {
        io.close()
        app.close( () => {
          app.unref()
        })
        loginfo(`Engine stopped.`)
        cb()
      }

      initEngine(io)
      resolve({stop})
    })
  })
  return promise
}

module.exports = create;