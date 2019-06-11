import {store} from '../config/store';
import gridCopy from '../config/misc/gridCopy';
import { DOWN, REFRESH, GAME_OVER} from '../config/constants';
import nextShape from '../config/misc/applyNewShape';

const addTetriminos = (field, index, room) => {
    for (let i=0; i<20; i++) {
        for (let j=0; j<10; j++) {
            if (field[i][j] == 2 ) {
                field[i][j] = 1;
            }
        }
    }
    return nextShape(room, index, field)
}



const down = () => {
    const state = store.getState();
    if (store.getState().playing == false) {
        return ({type: REFRESH})
    }
    const field = state.field;
    const ret = gridCopy(field);
    for (let i=0; i<20; i++) {
        for (let j=0; j<10; j++) {
            if (field[i][j] == 2 ) {
                if (i > 18 || field[i+1][j] == 1) { //le sol
                    return (addTetriminos(field, state.shapeIndex, state.rooms[state.actualRoom], state.yourID))
                }
                ret[i+1][j] = 2;
            }
        }
    }
    let roomsupdate = state.rooms;
    roomsupdate[state.actualRoom].shapes[state.shapeIndex].leftCorner.y++
    return {
        type: DOWN,
        field: ret,
        rooms: roomsupdate
    };
}

export default down;