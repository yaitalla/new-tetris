import socket from './socketConnect';
import { store } from './store';
import { SERVER_MESSAGE, ALERT } from './constants';

export const socketStream = () => {
    socket.on(SERVER_MESSAGE, msg => store.dispatch({type: ALERT, message: msg}))
}