import React from 'react';
import ReactDOM from 'react-dom';
import App from './presentational/App';
import './presentational/index.css';
import { Route, Router, browserHistory } from "react-router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import reducers from "./reducers";

import Home from "./Home";
import Admin from "./Admin";
import ApartmentList from "./ApartmentList";
import NavBar from "./NavBar";
import Student from "./Student";
import StudentList from "./StudentList";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <StudentList />,
  document.getElementById('root')
);