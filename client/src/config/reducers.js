import { ALERT, USERS_UPDATE, USER_ID } from './constants';

const initial_state = {
    message: 'no message yet',
    users: [],
    yourID: "",
}

const rootReducer = (state = initial_state, action) => {
    switch(action.type){
        case USER_ID:
            return {
                ...state,
                yourID: action.yourID
            }
        case USERS_UPDATE:
            return {
                ...state,
                users: action.users
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
