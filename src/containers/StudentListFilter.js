import React, { Component } from "react";
import { Button, Panel } from "react-bootstrap";

class StudentListFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
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
                            <input type="checkbox" name="housing" value="room_id" /> Need Housing
                        </div>
                        <div>
                            <input type="checkbox" name="deposit" value="depositPaid" /> Deposit Paid
                        </div>
                        <div>
                            <input type="checkbox" name="age" value="age" /> 21+
                        </div>
                        <div>
                            <input type="checkbox" name="accomodations" value="accomodations" /> Accomodations
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