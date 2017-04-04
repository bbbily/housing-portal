import React from 'react';
import ReactDOM from 'react-dom';
import App from './presentational/App';
import './styles/index.css';
import { Route, Router, browserHistory } from "react-router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import reducers from "./reducers";

import Home from "./presentational/views/Home";
import Admin from "./presentational/views/Admin";
import ApartmentList from "./presentational/views/ApartmentList";
import NavBar from "./presentational/NavBar";
import Student from "./presentational/Student";
import StudentList from "./presentational/views/StudentList";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <StudentList />,
  document.getElementById('root')
);