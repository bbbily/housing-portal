import React, { Component } from 'react';
import { Link } from 'react-router';
// import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/ApartmentList">
                        Apartment List
                    </Link>
                    <Link to="/StudentList">
                        Student List
                    </Link>
                </div>
            </div>
        )
    }
}

export default NavBar