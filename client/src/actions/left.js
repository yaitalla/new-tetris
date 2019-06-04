import {store} from '../config/store';
import gridCopy from '../config/misc/gridCopy';
import {LEFT, REFRESH} from '../config/constants';

const left = () => {
    const field = store.getState().field;
    const ret = gridCopy(field);
    for (let i=0; i<20; i++) {
        for (let j=0; j<10; j++) {
            if (field[i][j] == 2 ) {
                if (j == 0 || field[i][j-1] == 1) { //le sol
                    return ({type: REFRESH})
                }
                ret[i][j-1] = 2;
            }
        }
    }
    return {
        type: LEFT,
        field: ret
    };
}

export default left;