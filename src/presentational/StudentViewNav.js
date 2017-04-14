import React, { Component } from "react";
import { Link } from "react-router";
import '../styles/navbar.scss';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <img src={require("../styles/DevMtnLogo.png")} className="navbar-logo"/>
                <ul className="nav-links">
                   <li> <Link to="/mainmenu"> Main Menu </Link></li> {/* Brings student back to main view w/ drop down menu*/}
                   <li> <Link to="/logout"> Logout </Link> </li>
                </ul>
            </div>
        )
    }
}

export default NavBar