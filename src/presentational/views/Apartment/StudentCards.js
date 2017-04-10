import React, { Component } from "react";
import "../../../styles/studentcard.scss";

class StudentCards extends Component {
   render() {
        return (
            <div className="card-container">
                <div>
                    <img src="./favicon.ico" />
                    <h2>name</h2>
                    <p>age, gender, cohort</p>
                </div>
            </div>
        )
    }
}

export default StudentCards