import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import "../../../styles/accommodations.scss";

class Accommodations extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false
        };
    }
    render() {
        return (
            <div className="accommodations-container">
                <div onClick={ () => this.setState({ open: !this.state.open }) } >
                    <h3>
                        Accommodations
                    </h3>
                </div>
                <Panel collapsible expanded={ this.state.open }>
                    <div className="accommodations-panel">
                        This is where you can edit your accommodations.
                    </div>
                </Panel>
            </div>
        )
    }
}

export default Accommodations