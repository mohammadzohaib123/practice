import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store}from './Store/index';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './Component/App'


ReactDOM.render(<Provider store={store} >
    <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
