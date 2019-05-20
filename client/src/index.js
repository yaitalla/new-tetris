import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';                                                                                                                                                    
import App from './components/app';
import {store} from './config/store';

ReactDom.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById('tetris'))