import React, { Component } from "react";
import { Button, Panel } from "react-bootstrap";

class StudentListFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleChecked(type, checked, e) {
      if (type === "age")
        checked ? this.props.handleChecked(type, 21) : this.props.handleChecked(type, 0);
      else
        this.props.handleChecked(type, checked);
    }

    render() {
        return (
            <div>
                <div>
                    <Button onClick={ () => this.setState({ open: !this.state.open })}>
                        Filter Results
                    </Button>
                    <Panel collapsible expanded={ this.state.open }>
                        <div>
                            Campus - drop down
                        </div>
                        <div>
                            Cohort - drop down
                        </div>
                        <div>
                            <input type="checkbox" name="housing" value={ this.props.housing } onChange={ this.handleChecked.bind(this, "housing", !this.props.housing) } /> Need Housing
                        </div>
                        <div>
                            <input type="checkbox" name="deposit" value={ this.props.deposit_paid} onChange={ this.handleChecked.bind(this, "deposit_paid", !this.props.deposit_paid) } /> Deposit Paid
                        </div>
                        <div>
                            <input type="checkbox" name="age" value={ this.props.age } onChange={ this.handleChecked.bind(this, "age", !this.props.age) } /> 21+
                        </div>
                        <div>
                            <input type="checkbox" name="accomodations" value={ this.props.accomodations } onChange={ this.handleChecked.bind(this, "accomodations") } /> Accomodations
                        </div>
                        <div>
                            <input type="radio" name="gender" value="male" /> Male
                            <input type="radio" name="gender" value="female" /> Female
                        </div>
                    </Panel>
                </div>
            </div>
        )
    }
}

export default StudentListFilter
