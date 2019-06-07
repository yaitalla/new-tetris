// import {checkBelow} from '../config/misc/collisionDown';
import { ROTATE , REFRESH} from '../config/constants';
import gridCopy from '../config/misc/gridCopy';

const rotater = (shape) => {
    let checkArray = 10
    const arr = shape
    const ret = [[],[],[],[]]
    for (let i=0; i<4; i++){
        for (let j=0; j<4; j++){
            ret[i][j] = arr[4-j-1][i]
            if (ret[i][j]) {
                checkArray = j < checkArray ? j :
                                checkArray;
            }
        }
    }
    const update = new Array(checkArray).fill(0);
    for (let i=0; i<4; i++){
        ret[i] = ret[i].slice(checkArray).concat(update)
        //console.log('rotater', ret[i])
    }
    return ret;
}


const rotate = () => {
    const state = store.getState();
    let field = state.field, shapes = state.shapes, index = state.shapeIndex;
    const x = shapes[index].leftCorner.x
    const y = shapes[index].leftCorner.y
    const walls = (x >= 8);
    const walls2 = shapes[index].id == 5 && x >= 7;
  //  console.log(x, y)
    if (!checkBelow(field) || walls || walls2) {
        return { type: REFRESH, nbr: state.nb+1 }
    }
    let ret = gridCopy(field);
    const rot = {
        color: shapes[index].color,
        shape: rotater(shapes[index].shape),
        id: shapes[index].id,
        leftCorner: shapes[index].leftCorner
    }
    for (let i=y; i<(y+4); i++) {
        for(let j=x; j<(x+4); j++) {
            if (rot.shape[i-y][j-x] == 2) {
                ret[i][j] = rot.shape[i-y][j-x]
            }
        }
    }
    shapes[index] = rot;
    return {
        type: ROTATE,
        field: ret,
        shape: shapes,
    }
}

export default rotate;