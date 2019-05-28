import { ALERT, USERS_UPDATE, ROOM_CREATED, ROOM_UPDATE, USER_ID, ACTUAL_ROOM } from './constants';

const initial_state = {
    message: 'no message yet',
    users: [],
    yourID: "",
    rooms: [],
    actualRoom: -1
}

const rootReducer = (state = initial_state, action) => {
    switch(action.type){
        case ROOM_UPDATE:
            return {
                ...state,
                rooms: action.rooms
            }
        case ACTUAL_ROOM:
            return {
                ...state,
                actualRoom: action.room
            }
        case ROOM_CREATED:
            return {
                ...state,
                rooms: action.roomlist
            }
        case USER_ID:
            return {
                ...state,
                yourID: action.yourID
            }
        case USERS_UPDATE:
            return {
                ...state,
                users: action.users,
                rooms: action.rooms
            }
        case ALERT:
            return {
                ...state,
                message: action.message
            }
        default: 
            return state
    }
}

export default rootReducer;
