import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './Components/App';
import movies from './reducers';
import rootReducer from './reducers';

const store = createStore(rootReducer);
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
