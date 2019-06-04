import {store} from '../store';
import down from '../../actions/down';

// const fall = () => {
//     setTimeout(() => {
//         store.dispatch(down())
//     }, 500);
// }
const fallPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(down());
    }, 500);
  });
  
  fallPromise.then((value) => {
    store.dispatch(value)
    // expected output: "foo"
  });


export default fallPromise;