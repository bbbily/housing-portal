import React, { Component } from "react";
import { Link } from "react-router";
import '../styles/navbar.scss';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <img src={require("../styles/DevMtnLogo.png")} className="navbar-logo"/>
                <ul className="nav-links">
                   <li> <Link to="/admin"> Admin </Link> </li>
                   <li> <Link to="/apartmentList"> Apartments </Link></li>
                   <li> <Link to="/studentList"> Students </Link></li>
                </ul>
            </div>
        )
    }
}

export default NavBar