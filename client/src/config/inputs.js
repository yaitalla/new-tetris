import {store} from './store';
import move from '../actions/moves';
const keyboard = {
    // 37: 'left',
    // 38: 'rotate',
    // 39: 'right',
    40: 'down'
  };
  
  let keydownActive;
  
  const boardKeys = Object.keys(keyboard).map(e => parseInt(e, 10));
  const inputs = () => 
  {
      const keyDown = (e) => {
        const type = keyboard[e.keyCode];
        if (e.metaKey === true || boardKeys.indexOf(e.keyCode) === -1) {
          return;
        }
        store.dispatch(move[type]())
        return;
     };

    const keyup = (e) => {
          if (state.moving == true) {
            store.dispatch({type: STOP})
            return;
          }
    }

  window.addEventListener('keydown', keyDown);
  // window.addEventListener('keyup', keyup);
}

export default inputs;