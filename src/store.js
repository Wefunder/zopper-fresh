// You will need to modify this file to set your initial state.

/*
 * src/store.js
 * With initialState
*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const startState = {
   
}

export default function configureStore(initialState=startState) {
 return createStore(
   reducer,
   initialState,
   applyMiddleware(thunk)
 );
}
