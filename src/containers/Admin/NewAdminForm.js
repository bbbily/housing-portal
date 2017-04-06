import React, { Component } from "react";
import { Button, Panel } from "react-bootstrap";
import { createAdmin } from "../../actions/action_admin";
import { connect } from "react-redux";
import DropDown from "../DropDownMenu";
import "../../styles/newadmin.scss";

class NewAdminForm extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false
        };
    }

    render() {
        return (
            <div onClick={ ()=> this.setState({ open: !this.state.open }) }>
                <Button>New User:</Button>
                    <Panel collapsible expanded={ this.state.open }>
                        <form>
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Username" />
                            <input type="password" placeholder="Password" />
                            <button>Save</button>
                            <button>Cancel</button>
                        </form>
                    </Panel>
            </div>
        )
    }
}

export default NewAdminForm;