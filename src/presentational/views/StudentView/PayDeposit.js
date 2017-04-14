import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import "../../../styles/paydeposit.scss";

class PayDeposit extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false
        };
    }
    render() {
        return (
            <div className="deposit-container">
                <div onClick={ () => this.setState({ open: !this.state.open}) }>
                    <h3>Pay Deposit</h3>
                </div>
                <Panel collapsible expanded={ this.state.open }>
                    <div className="deposit-panel">
                        This is the dropdown information for paying your deposit.
                    </div>
                </Panel>
            </div>
        )
    }
}

export default PayDeposit