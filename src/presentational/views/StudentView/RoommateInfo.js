import React, { Component } from "react";
import { Panel } from "react-bootstrap";

class RoommateInfo extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false
        };
    }
    render() {
        return (
            <div>
        <div onClick={ () => this.setState({ open: !this.state.open }) }>
                <h3>Roommate Info</h3>
            </div>
                <Panel collapsible expanded={ this.state.open }>
                    <div>
                        This is where you can get top secret info on your roommates.
                    </div>
                </Panel>
            </div>
        )
    }
}

export default RoommateInfo