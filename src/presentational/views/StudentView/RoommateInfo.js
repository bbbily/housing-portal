import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import "../../../styles/roommateinfo.scss";

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
                        This is where you can get top secret info on your roommates.
                    </div>
                </Panel>
            </div>
        )
    }
}

export default RoommateInfo