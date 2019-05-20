import { ALERT } from './constants';

const initial_state = {
    message: 'no message yet'
}

const rootReducer = (state = initial_state, action) => {
    switch(action.type){
        case ALERT:
            return {
                message: action.message
            }
        default: 
            return state
    }
}

export default rootReducer;
