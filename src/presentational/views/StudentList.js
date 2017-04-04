import React, { Component } from 'react';

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }

    render() {
        return (
            <div>
                <h1>Student List</h1>
                <div>
                    <button onClick={ () => this.setState({ open: !this.state.open })}>
                        Filter Results
                    </button>
                    <panel collapsible expanded={ this.state.open }>
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
                    </panel>
                </div>
                <div>
                    {/* Clickable Cards - Expand w/ more info. */}
                    {/* ng-repeat... ? */}
                    <img src="./favicon.ico" />
                    <h2>name></h2>
                    <p>age, gender, cohort</p>
                </div>
                <div>
                    {/* ng-show... ? */}
                    <img src="./favicon.ico" />
                    <h1>name</h1>
                    <p>room, age, gender, address, cohort, eligibility, deposit paid</p>
                </div>
            </div>
        )
    }
}

export default StudentList