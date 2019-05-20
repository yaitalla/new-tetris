const initial_state = {
    grid: [],
    shapes: [],
    shapeIndex: -1,
    playing: false,
    colors: [],
    nb: 0,
    moving: false,
    gameOver: false,
    shapereq: false,
    score: 0
}

const rootReducer = (state = initial_state, action) => {
    switch(action.type){
        case 'LOGIN_DATA':
            return {
                ...state,
                rooms: action.rooms,
                users: action.users,
                playing: false,
                nb: 0
            }
        case 'REFRESH':
        //console.log(state.nb)
                return {
                ...state,
                nb: action.nbr
            }
        default: 
            return state
    }
}

export default rootReducer;
