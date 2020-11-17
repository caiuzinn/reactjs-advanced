import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';


import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import './tutorial/redux_vs_context/index.css';

// App tutorial
//import App from './App';


import './index.css';
import App from './tutorial/redux_vs_context/App';
import shopReducer from './tutorial/redux_vs_context/store/reducers';

const store = createStore(shopReducer, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);




// //App Porjects
// import App  from './App'

// // tutorial react 
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// tutorial redux 
