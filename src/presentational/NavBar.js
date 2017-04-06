import React, { Component } from "react";
import { Link } from "react-router";
import '../styles/navbar.scss';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <img src="../styles/DevMtnLogo.png" />
                <div className="nav-links">
                    <Link to="/admin">
                        Admin Page
                    </Link>
                    <Link to="/apartmentList">
                        Apartment List
                    </Link>
                    <Link to="/studentList">
                        Student List
                    </Link>
                    Logout
                </div>
            </div>
        )
    }
}

export default NavBar