import React, { Component } from 'react';

class Student extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src="./favicon.ico" />
                    <h2>name</h2>
                    <p>age, gender, cohort</p>
                </div>
                <div>
                    <img src="./favicon.ico" />
                    <h1>name</h1>
                    <p>room, age, gender, address, cohort, eligibility, deposit paid</p>
                </div>
            </div>
        )
    }
}

export default Student