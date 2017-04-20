import React, { Component } from "react";
import { Panel, Button } from "react-bootstrap";
import { getAdmins, createAdmin } from "../../actions/action_admin";
import { connect } from "react-redux";
import DropDown from "../DropDownMenu";
import "../../styles/newadmin.scss";
import NewAdminForm from "./NewAdminForm";
import AdminForm from "./AdminForm"

class CreateNewAdmin extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        };

       
    }

    componentWillMount() {
      this.props.dispatch(getAdmins());
    }

    clearData() {
        this.refs.first_name.value = "",
        this.refs.last_name.value = "",
        this.refs.email.value = "",
        this.refs.password.value = ""
    }

    render() {
      console.log(this.props.all)
      const admins = this.props.all.map( (admin, i) => (
        <li key={admin.id} id={admin.id}>
          <AdminForm initialValues={{ first_name: admin.first_name, last_name: admin.last_name, email: admin.email, campus_id: admin.campus_id}}  firstName={ admin.first_name } form={"form" + admin.id} id={ admin.id } key={admin.id} />
        </li> ));

        return (
            <div className="new-admin-container">
                <div onClick={ ()=> this.setState({ open: !this.state.open }) }>
                    <h3>Admin Users</h3>
                </div>
                <Panel collapsible expanded={ this.state.open }>
                    <div className="users-panel">
                    <ul className="admin-user-title">
                        <li>First</li>
                        <li className="admin-li-last">Last</li>
                        <li className="admin-li-email">Email</li>
                        <li className="admin-li-campus">Campus</li>
                        <li>Actions</li>
                    </ul>
                        <ul>
                          { admins }
                        </ul>
                    <ul className="admin-user-title">
                        <li><h4>New Admin</h4></li>
                    </ul>
                    <ul className="admin-user-title">
                        <form>
                        <li><input ref="first_name" type="text" className="admin-input-text" placeholder="first" value={ this.state.first_name } onChange={ e => { this.setState({first_name: e.target.value})} }/></li>
                        <li><input ref="last_name" type="text" className="admin-input-text" placeholder="last" value={ this.state.last_name } onChange={ e => { this.setState({last_name: e.target.value})} }/></li>
                        <li><input ref="email" type="text" className="admin-input-text" placeholder="email" value={ this.state.email } onChange={ e => { this.setState({email: e.target.value})} } /></li>
                        <li><input ref="password" type="password" className="admin-input-text" placeholder="Password" value={ this.state.password } onChange={ e => this.setState({password: e.target.value})}  /></li>
                        <li><Button onClick={ () => {this.props.dispatch(createAdmin(this.state)); this.clearData()} }>Save</Button></li>
                        </form>
                    </ul>
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
