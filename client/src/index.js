import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';                                                                                                                                                    
import App from './components/app';
import {store} from './config/store';
import {socketStream} from './config/socketStream';
import inputs from './config/inputs';

const drop = (playing) => {
    let id = setInterval(() => {
      fall().then((value) => {
          store.dispatch(value)
      });
    }, 500);
    if (playing == false) {
      clearInterval(id)
    }
}

ReactDom.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById('tetris'))

socketStream();
inputs();
drop(store.getState().playing);