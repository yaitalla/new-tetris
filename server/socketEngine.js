const socketEngine = (io, userlist, roomlist) => {
    io.on('connection', (socket) => {
      console.log("User connected: " + socket.id)
  
      if (userlist.indexOf(socket.id) == -1){
        userlist.push(socket.id)
      }
      loginfo('connection')
      socket.emit('NEW_CONNECT', {
        type: 'LOGIN_DATA',
        rooms: roomlist,
        users: userlist
      })
      io.to(socket.id).emit('USER_ID', {
        type: 'USER_ID',
        id: socket.id,
        room: ""
      });
      socket.on('disconnect', (action) => {
        console.log("User disconnected: " + socket.id)
      })
    })
  }

  module.exports = socketEngine;