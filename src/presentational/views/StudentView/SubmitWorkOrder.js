import React, { Component } from "react";
import { Panel } from "react-bootstrap";

class WorkOrder extends Component {
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
                    <h3>Work Orders</h3>
                </div>
                <Panel collapsible expanded={ this.state.open } >
                    This is where you can submit a work order.
                </Panel>
            </div>
        )
    }
}

export default WorkOrder