import {store} from '../config/store';
import socket from '../config/socketConnect';
import grid from '../config/misc/emptyGrid';
import gridCopy from '../config/misc/gridCopy';
import { DOWN, ADD_TETRI, GAME_OVER} from '../config/constants';

const nextShape = (room, index, grid) => {
    const shape = room.shapes[index+1].shape;
    for (let i=0; i<4; i++) {
      for (let j=4; j<8; j++) {
          if (shape[i][j-4] == 2){
            grid[i][j] = shape[i][j-4]
          }
          if (grid[i][j] == 1) {
              return {
                  type: GAME_OVER
              }
          }
      }
    }
    return {
        type: ADD_TETRI,
        field: grid,
        shapeIndex: index+1
    }
  }

const addTetriminos = (field) => {
    const state = store.getState();
    const i = state.shapeIndex;
    const room = state.rooms[state.actualRoom]
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
    const field = store.getState().field;
    const ret = gridCopy(field);
    for (let i=0; i<20; i++) {
        for (let j=0; j<10; j++) {
            if (field[i][j] == 2 ) {
                if (i > 18 || field[i+1][j] == 1) { //le sol
                    return (addTetriminos(field))
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