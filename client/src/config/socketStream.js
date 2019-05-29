import socket from './socketConnect';
import { store } from './store';
import { SERVER_MESSAGE, ROOM_CREATED, ALERT, ROOM_UPDATE,
     USERS_UPDATE, USER_ID, ACTUAL_ROOM, PAUSE } from './constants';

export const socketStream = () => {
    socket.on(SERVER_MESSAGE, msg =>
        store.dispatch({type: ALERT, message: msg})
    )
    socket.on(USERS_UPDATE, data =>
        store.dispatch({type: USERS_UPDATE, users: data.userlist, rooms: data.roomlist})
    )
    socket.on(USER_ID, user =>
        store.dispatch({type: USER_ID, yourID: user})
    )
    socket.on(ROOM_CREATED, rooms => {
        store.dispatch({type: ROOM_CREATED, roomlist: rooms})
    })
    socket.on(ACTUAL_ROOM, rooms => {
        store.dispatch({type: ACTUAL_ROOM, room: rooms})
    })
    socket.on(ROOM_UPDATE, roomlist => {
        store.dispatch({type: ROOM_UPDATE, rooms: roomlist})
    })
    socket.on(PAUSE, data => {
        store.dispatch({type: PAUSE, playing: data.playing})
    })
}