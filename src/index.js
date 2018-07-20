import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store}from './Store/index';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Kitchen from './Kitchen';

ReactDOM.render(<Provider store={store} >
    <Kitchen/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
