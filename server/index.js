const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const debug = require('debug');
const server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(cors({"origin": "*"})); //cross origin ressource sharing
app.use(bodyParser.urlencoded({ extended: false })); //parse request bodies in a midlleware
app.use(bodyParser.json());
const logerror = debug('tetris:error')
    , loginfo = debug('tetris:log')

    io.sockets.on('connection', (socket) => {
        console.log('connection')
        
        socket.on('disconnect', (action) => {
          console.log("User disconnected: " + socket.id)
        })
      })

server.listen(process.env.port || 4000, () => {
    console.log('Server listening on http://localhost:4000 or http://127.0.0.1:4000')
});