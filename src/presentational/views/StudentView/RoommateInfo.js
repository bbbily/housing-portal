import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import "../../../styles/roommateinfo.scss";
import StudentCards from "../Apartment/StudentCards";

class RoommateInfo extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false
        };
    }
    render() {
        return (
            <div className="roommate-container">
                <div onClick={ () => this.setState({ open: !this.state.open }) }>
                    <h3>Roommate Info</h3>
                </div>
                <Panel collapsible expanded={ this.state.open }>
                    <div className="roommate-panel">
                        <h1>Apartment ###</h1>
                        <StudentCards />
                        <p>Display apartment number of student who is logged in, and ALL corresponding roommate cards.</p>
                    </div>
                </Panel>
            </div>
        )
    }
}

export default RoommateInfo