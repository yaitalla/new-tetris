import {store} from '../config/store';
import gridCopy from '../config/misc/gridCopy';
import { DOWN, ADD_TETRI, GAME_OVER} from '../config/constants';
import nextShape from '../config/misc/applyNewShape';

const addTetriminos = (field, i, room) => {
    for (let i=0; i<20; i++) {
        for (let j=0; j<10; j++) {
            if (field[i][j] == 2 ) {
                field[i][j] = 1;
            }
        }
    }
    return nextShape(room, i, field)
}


const down = () => {
    const state = store.getState();
    const field = state.field;
    const ret = gridCopy(field);
    for (let i=0; i<20; i++) {
        for (let j=0; j<10; j++) {
            if (field[i][j] == 2 ) {
                if (i > 18 || field[i+1][j] == 1) { //le sol
                    return (addTetriminos(field, state.shapeIndex, state.rooms[state.actualRoom]))
                }
                ret[i+1][j] = 2;
            }
        }
    }
    return {
        type: DOWN,
        field: ret
    };
}

export default down;