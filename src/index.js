import React from 'react';
import ReactDOM from 'react-dom';
import App from './presentational/App';
import './presentational/index.css';
import { Route, Router, browserHistory } from "react-router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers)} >
    <Router history={ browserHistory } >
      <Route path="/" component={ App } >
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);