import React, { Component } from "react";
import "../../../styles/admin.css";
import CreateNewAdmin from "./CreateNewAdmin";
import CreateNewCohort from "./CreateNewCohort";

class Admin extends Component {
    render() {
        return (
            <div className="admin-container">
                <h1>Admin</h1>
                <div className="admin-menu">
                   <CreateNewAdmin />
                   <CreateNewCohort> {this.props.children} </CreateNewCohort>
                    <h3>Create New Apartment</h3>
                    <div>
                        <select name="Campus">
                            <option value="Dallas">Dallas</option>
                            <option value="Provo">Provo</option>
                            <option value="SaltLake">Salt Lake</option>
                        </select>
                    </div>
                    <h4>Address:</h4>
                    <div>
                        <input type="text" placeholder="Street" />
                        <input type="text" placeholder="Apt. #" />
                        <input type="text" placeholder="City" />
                        <input type="text" placeholder="State" />
                        <input type="text" placeholder="Zip Code" />
                    </div>
                    <h4>New Room:</h4>
                    <div>
                        <label>Beds:</label>
                        <input type="number" placeholder="#" />
                    </div>
                    <div>
                        <input type="radio" name="gender" value="male" /> Male
                        <input type="radio" name="gender" value="female" /> Female
                    </div>
                    <div>
                        <button>New Room</button>
                        <button>Save</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin