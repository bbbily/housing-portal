import React, { Component } from "react";
import { Panel } from "react-bootstrap";

class StudentCards extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false
        };
    }

    render() {
        return (
            <div>
                <div onClick={ ()=> this.setState({ open: !this.state.open }) }>
                    <img src="./favicon.ico" />
                    <h2>{this.props.name}</h2>
                    <p>{this.props.age}{this.props.gender}{this.props.cohort}</p>
                </div>
                <Panel collapsible expanded={ this.state.open }>
                    <div>
                        <img src="./favicon.ico" />
                        <h1>name</h1>
                        <p>room, age, gender, address, cohort, eligibility, deposit paid</p>
                    </div>
                </ Panel>
            </div>
        )
    }
}

export default StudentCards