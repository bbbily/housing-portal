import React, { Component } from "react";
import "../../styles/admin.scss";
import CreateNewAdmin from "../../containers/Admin/CreateNewAdmin";
import CreateNewCohort from "../../containers/Admin/CreateNewCohort";
import CreateNewApartment from "../../containers/Admin/CreateNewApartment";


class Admin extends Component {
    render() {
        return (
            <div>
            <h1>Admin</h1>
            <div className="admin-container">
                   <CreateNewAdmin />
                   <CreateNewCohort />
                   <CreateNewApartment />
            </div>
            </div>
        )
    }
}

export default Admin
