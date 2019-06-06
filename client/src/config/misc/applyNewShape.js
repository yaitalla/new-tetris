import { ADD_TETRI, GAME_OVER } from '../constants';
import playsound from '../misc/playSound';

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
    playsound("landed")
    return {
        type: ADD_TETRI,
        field: grid,
        shapeIndex: index+1
    }
  }

export default nextShape;