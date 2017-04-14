import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import "../../../styles/workorder.scss";

class WorkOrder extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false
        };
    }
    render() {
        return (
            <div className="workorder-container">
                <div onClick={ () => this.setState({ open: !this.state.open }) }>
                    <h3>Work Orders</h3>
                </div>
                <Panel collapsible expanded={ this.state.open } >
                    <div className="workorder-panel">
                        This is where you can submit a work order.
                    </div>
                </Panel>
            </div>
        )
    }
}

export default WorkOrder