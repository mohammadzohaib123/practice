import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store}from './Store/index';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Navbar from './Container/Navbar'
import Kitchen from './Kitchen';

ReactDOM.render(<Provider store={store} >
    <div><Navbar /><Kitchen/></div>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
