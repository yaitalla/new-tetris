import {store} from '../store';
import down from '../../actions/down';
import { REFRESH } from '../constants';

// const fall = () => {
//     setTimeout(() => {
//         store.dispatch(down())
//     }, 500);
// }


const fall = () => {
  const fallPromise = new Promise((resolve, reject) => {
      store.dispatch(down())
    resolve({type: REFRESH})
  });
  
  // fallPromise.then((value) => {
  //   store.dispatch(value)
  //   // expected output: "foo"
  // });
  return fallPromise;
}


export default fall;