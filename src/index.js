import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from "react-router";
import Home from "./Home";
import Admin from "./Admin";
import ApartmentList from "./ApartmentList";
import NavBar from './NavBar';
import Student from "./Student";
import StudentList from "./StudentList";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <Router history={hashHistory}>
    <Route component={NavBar}>
      <Route path="/" component={Home} />
      <Route path="/Admin" component={Admin} />
      <Route path="/ApartmentList" component={ApartmentList} />
      <Route path="/Student" component={Student} />
      <Route path="/StudentList" component={StudentList} />
    </Route>
  </Router>,
  document.getElementById('root')
);
