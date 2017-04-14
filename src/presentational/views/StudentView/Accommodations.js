import React, { Component } from "react";
import { Panel } from "react-bootstrap";

class Accommodations extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false
        };
    }
    render() {
        return (
            <div>
                <div onClick={ () => this.setState({ open: !this.state.open }) } >
                    <h3>
                        Accommodations
                    </h3>
                </div>
                <Panel collapsible expanded={ this.state.open }>
                    This is where you can edit your accommodations.
                </Panel>
            </div>
        )
    }
}

export default Accommodations