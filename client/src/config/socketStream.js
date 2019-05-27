import socket from './socketConnect';
import { store } from './store';
import { SERVER_MESSAGE, ROOM_CREATED, ALERT, USERS_UPDATE, USER_ID } from './constants';

export const socketStream = () => {
    socket.on(SERVER_MESSAGE, msg =>
        store.dispatch({type: ALERT, message: msg})
    )
    socket.on(USERS_UPDATE, userlist =>
        store.dispatch({type: USERS_UPDATE, users: userlist})
    )
    socket.on(USER_ID, user =>
        store.dispatch({type: USER_ID, yourID: user})
    )
    socket.on(ROOM_CREATED, rooms => {
        store.dispatch({type: ROOM_CREATED, roomlist: rooms})
    })
}