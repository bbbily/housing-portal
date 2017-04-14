import React, { Component } from "react";
import { Panel } from "react-bootstrap";

class PayDeposit extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false
        };
    }
    render() {
        return (
            <div>
                <div onClick={ () => this.setState({ open: !this.state.open}) }>
                    <h3>Pay Deposit</h3>
                </div>
                <Panel collapsible expanded={ this.state.open }>
                    <div>
                        This is the dropdown information for paying your deposit.
                    </div>
                </Panel>
            </div>
        )
    }
}

export default PayDeposit