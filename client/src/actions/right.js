import {store} from '../config/store';
import gridCopy from '../config/misc/gridCopy';
import {RIGHT, REFRESH} from '../config/constants';

const right = () => {
    const field = store.getState().field;
    const ret = gridCopy(field);
    for (let i=0; i<20; i++) {
        for (let j=0; j<10; j++) {
            if (field[i][j] == 2 ) {
                if (j == 9 || field[i][j+1] == 1) { //le sol
                    return ({type: REFRESH})
                }
                ret[i][j+1] = 2;
            }
        }
    }
    return {
        type: RIGHT,
        field: ret
    };
}

export default right;