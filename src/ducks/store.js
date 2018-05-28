//Import the createStore method from redux.
import { createStore } from 'redux';
//Import the reducer 
import reducer from './reducer';

//Export the created store.
export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());;