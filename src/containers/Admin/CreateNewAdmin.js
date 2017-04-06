import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import { getAdmins, createAdmin, deleteAdmin, editAdmin } from "../../actions/action_admin";
import { connect } from "react-redux";
import DropDown from "../DropDownMenu";
import "../../styles/newadmin.scss";
import NewAdminForm from "./NewAdminForm";

class CreateNewAdmin extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false
        };
    }

    componentWillMount() {
      this.props.dispatch(getAdmins());
    }

    render() {
      const admins = this.props.all.map( admin => (
        <li key={admin.id}>
          { admin.first_name }  { admin.last_name }
        </li>
      ));
      console.log("allllllll", admins)
        return (
            <div className="new-admin-container">
                <div onClick={ ()=> this.setState({ open: !this.state.open }) }>
                    <h3>New Admin</h3>
                </div>
                <Panel collapsible expanded={ this.state.open }>
                    <div className="users-panel">
                        <ul>
                          { admins }
                        </ul>
                        <NewAdminForm />
                    </div>
                </Panel>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    all: state.admin.all
  }
}

export default connect(mapStateToProps)(CreateNewAdmin);
