import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import DatePickerComponent from "../DatePicker";

export default class CreateNewCohort extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false,
        };

    }


    render() {
        return (
            <div>
                <div onClick={ ()=> this.setState({ open: !this.state.open }) }>
                    <h3>New Cohort</h3>
                </div>
                <Panel collapsible expanded={ this.state.open }>
                    <div>
                        <input type="text" placeholder="DM##" />
                        Start Date <DatePickerComponent />
                        End Date <DatePickerComponent />
                        <button>Save</button>
                        <button>Cancel</button>
                    </div>
                </Panel>
            </div>
        );
    }
}
