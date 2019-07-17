import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import reducers from './reducers/index';
import {
  Provider
} from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;
const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk)),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render( <
    Provider store = {
      store
    } >
    <
    App / >
    <
    /Provider>, document.getElementById('root'));
    serviceWorker.unregister();