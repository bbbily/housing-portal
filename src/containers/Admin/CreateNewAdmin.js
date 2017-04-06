import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import { getAdmins, createAdmin, deleteAdmin, editAdmin } from "../../actions/action_admin";
import { connect } from "react-redux";
import DropDown from "../DropDownMenu";
import "../../styles/newadmin.scss";
import NewAdminForm from "./NewAdminForm";
import AdminForm from "./AdminForm"

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
      const admins = this.props.all.map( (admin, i) => (
        <li key={i} id={admin.id}>
          <AdminForm initialValues={{ first_name: admin.first_name, last_name: admin.last_name, email: admin.email, campus_id: admin.campus_id}}  firstName={ admin.first_name } form={"form" + admin.id} id={ admin.id } key={admin.id} />
        </li>
      ));

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
