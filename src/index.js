import React from "react";
import ReactDOM from "react-dom";
// import { Router, Route, hashHistory } from "react-router";
import Home from "./Home";
import Admin from "./Admin";
import ApartmentList from "./ApartmentList";
import NavBar from "./NavBar";
import Student from "./Student";
import StudentList from "./StudentList";
import "./presentational/index.css";
import App from "./presentational/App";

ReactDOM.render(
  <Admin />,
  document.getElementById('root')
);