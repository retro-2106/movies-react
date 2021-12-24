import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import rootReducer from './reducers';
import './index.css';

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
// const logger = ({dispatch, getState}) => (next) => (action) =>{
//   if( typeof action !== 'function')
//   {
//     console.log('ACTION_TYPE= ', action.type);
//   }

//   next(action);
// };

// const thunk = ({dispatch, getState}) => (next) => (action) =>{
//   //logger code
//   // console.log('ACTION_TYPE =', action.type);

//   if(typeof action === 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

// const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// console.log('store', store);
// // console.log('BEFORE STATE', store.getState());

// export const StoreContext = createContext();
// console.log('Store Context', StoreContext);
// // store.dispatch({
// //   type: 'ADD_MOVIES',
// //   movies: [{name: 'Superman'}]
// // });

// // console.log('AFTER STATE', store.getState());

// class Provider extends React.Component {
//   render() {
//     const {store} = this.props;
//     return (<StoreContext.Provider  value={store}>
//       {this.props.children}
//     </StoreContext.Provider>
//     );
//   }
// }

// ReactDOM.render(
//   <Provider store={store}>
//     <App/>  {/*passing the state as props */} 
//   </Provider>,
//   document.getElementById('root')
// );

// const logger = ({ dispatch, getState }) => (next) => (action) => {
//   // my middlware
//   console.log('ACTION', action);
//   next(action);
// };

// // const thunk = store => next => action => {
// //   if (typeof action === 'function') {
// //     return action(store.dispatch);
// //   }

// //   next(action);
// // };

// const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// // console.log(store);
// console.log('state', store.getState());

// export const StoreContext = createContext();

// console.log('StoreContext', StoreContext);

// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;
//     return (
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }
// }

// // const connectedComponent = connect(callback)(App);
// export function connect(callback) {
//   return function (Component) {
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(() => {
//           this.forceUpdate();
//         });
//       }

//       componentWillUnmount() {
//         this.unsubscribe();
//       }
//       render() {
//         const { store } = this.props;
//         const state = store.getState();
//         const dataToBeSentAsProps = callback(state);

//         return <Component dispatch={store.dispatch} {...dataToBeSentAsProps} />;
//       }
//     }

//     class ConnectedComponentWrapper extends React.Component {
//       render() {
//         return (
//           <StoreContext.Consumer>
//             {(store) => {
//               return <ConnectedComponent store={store} />;
//             }}
//           </StoreContext.Consumer>
//         );
//       }
//     }
//     return ConnectedComponentWrapper;
//   };
// }

// // update store by dispatching actions
// // store.dispatch({
// //   type: 'ADD_MOVIES',
// //   movies: moviesList
// // });
// // console.log('state', store.getState());

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );


const logger = ({ dispatch, getState }) => (next) => (action) => {
  // my middlware
  console.log('ACTION', action);
  next(action);
};

// const thunk = store => next => action => {
//   if (typeof action === 'function') {
//     return action(store.dispatch);
//   }

//   next(action);
// };

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// // console.log(store);
// console.log('state', store.getState());

// export const StoreContext = createContext();

// console.log('StoreContext', StoreContext);

// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;
//     return (
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }
// }

// const connectedComponent = connect(callback)(App);
// export function connect(callback) {
//   return function (Component) {
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(() => {
//           this.forceUpdate();
//         });
//       }

//       componentWillUnmount() {
//         this.unsubscribe();
//       }
//       render() {
//         const { store } = this.props;
//         const state = store.getState();
//         const dataToBeSentAsProps = callback(state);

//         return <Component dispatch={store.dispatch} {...dataToBeSentAsProps} />;
//       }
//     }

//     class ConnectedComponentWrapper extends React.Component {
//       render() {
//         return (
//           <StoreContext.Consumer>
//             {(store) => {
//               return <ConnectedComponent store={store} />;
//             }}
//           </StoreContext.Consumer>
//         );
//       }
//     }
//     return ConnectedComponentWrapper;
//   };
// }

// update store by dispatching actions
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: moviesList
// });
// console.log('state', store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
