import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './ducks/store';
//import the Provider component that wraps the component with the store.
import { Provider } from 'react-redux';
//import the HashRouter and alias as R component that wraps the component with the routes.
import { HashRouter as R } from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';

//Provider and R are interchangable, can nest one and the other.
ReactDOM.render(<Provider store={store}><R><App /></R></Provider>, document.getElementById('root'));
// registerServiceWorker();
