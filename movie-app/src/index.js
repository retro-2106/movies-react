import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './Components/App';
// import movies from './reducers';
import rootReducer from './reducers';

//middlware is used to access the  state
// and modify it before the action is dispatched


//we crated a logger to keep a track of our actions performed
//logger(obj)(next)(action)
// if we have multiple middliware next helps to call the next middleware


// const logger = function({dispatch, getState}) {
//   return function(next) {
//     return function(action){
//       //here middleware code comes
//       console.log('ACTION_TYPE =', action.type);
//       next(action); ///calling the next middleware with action as the argument
    
//       //but if there is no other middleware left it calls the dispatch method
//     }
//   }
// }

//another way of writing logger function
const logger = ({dispatch, getState}) => (next) => (action) =>{
  if( typeof action !== 'function')
  {
    console.log('ACTION_TYPE= ', action.type);
  }

  next(action);
}

// const thunk = ({dispatch, getState}) => (next) => (action) =>{
//   //logger code
//   // console.log('ACTION_TYPE =', action.type);

//   if(typeof action === 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log('store', store);
// console.log('BEFORE STATE', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// });

// console.log('AFTER STATE', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store = {store}/>  {/*passing the state as props */} 
  </React.StrictMode>,
  document.getElementById('root')
);
