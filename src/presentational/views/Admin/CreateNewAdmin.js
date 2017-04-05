
import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { fetchApartments } from "../../../actions/action_apartments";
import { connect } from "react-redux";
import DropDown from "../../../containers/DropDownMenu";

class CreateNewAdmin extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false
        };
    }

    componentWillMount() {
      console.log("mounted")
      this.props.dispatch(fetchApartments());
    }

    render() {

      console.log("user", this.props.user)
        return (
            <div>
                <div onClick={ ()=> this.setState({ open: !this.state.open }) }>
                    <h3>New Admin</h3>
                </div>
                <Panel collapsible expanded={ this.state.open }>
                    <div>
                        <ul>
                        <li>User 1</li>
                        <li>User 2</li>
                        <li>User 3</li>
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
    user: state.apartments.apartments
  }
}

export default connect(mapStateToProps)(CreateNewAdmin);
