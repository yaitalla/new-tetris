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
    io.emit('USERS_UPDATE', {userlist, roomlist})
    socket.on('CREATE_ROOM', roomname => {
      const data = {
        name: roomname,
        owner: socket.id,
        users: []
      }
      roomlist.push(data)
      io.emit('ROOM_CREATED', roomlist)
    })
    //io.to(socket.id).emit('USER_ID', socket.id);
    socket.emit('USER_ID', socket.id)

    socket.on('ENTER_ROOM', data => {
      let ret;
      for (let i in roomlist) {
        if (roomlist[i].name == data.name) {
          ret = i
          roomlist[i].users.push(socket.id)
         }
       }
       socket.join(data.name)
     socket.emit('ACTUAL_ROOM', ret)
     io.emit('ROOM_UPDATE', roomlist)
    })
    socket.on('disconnect', () => {
      for (let i in roomlist) {
        for (let j in roomlist[i].users) {
          if (roomlist[i].users[j] == socket.id) {
            roomlist[i].users.splice(j, 1)
          }
        }
       }
       userlist.splice(userlist.indexOf(socket.id), 1)
       io.emit('ROOM_UPDATE', roomlist)
       io.emit('USERS_UPDATE', {userlist, roomlist})
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