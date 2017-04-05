import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { getAdmins, createAdmin, deleteAdmin, editAdmin } from "../../actions/action_admin";
import { connect } from "react-redux";
import DropDown from "../DropDownMenu";

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
            <div>
                <div onClick={ ()=> this.setState({ open: !this.state.open }) }>
                    <h3>New Admin</h3>
                </div>
                <Panel collapsible expanded={ this.state.open }>
                    <div>
                        <ul>
                          { admins }
                        </ul>
                        <h4>New User:</h4>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button>Save</button>
                        <button>Cancel</button>
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
