import React, { Component } from "react";
import "../../styles/admin.scss";
import NavBar from "../NavBar";
import CreateNewAdmin from "../../containers/Admin/CreateNewAdmin";
import CreateNewCohort from "../../containers/Admin/CreateNewCohort";
import CreateNewApartment from "../../containers/Admin/CreateNewApartment";


class Admin extends Component {
    render() {
        return (
            <div>
            <h1>Admin</h1>
            <div className="admin-container">
                <NavBar />
                <h1>Admin</h1>
                <div className="admin-menu">
                    <CreateNewAdmin />
                    <CreateNewCohort />
                    <CreateNewApartment />
                </div>
            </div>
          </div>
        )
    }
}

export default Admin
