import React, { Component } from "react";
import NavBar from "../../NavBar";
import PayDeposit from "./PayDeposit";
import RoommateInfo from "./RoommateInfo";
import WorkOrder from "./SubmitWorkOrder";
import Accommodations from "./Accommodations";
import "../../../styles/studentview.scss";

class StudentView extends Component {
    render() {
        return (
            <div className="studentview-container">
                <NavBar />
                <div className="studentview-menu">
                    <PayDeposit />
                    <RoommateInfo />
                    <WorkOrder />
                    <Accommodations />
                </div>
            </div>
        )
    }
}

export default StudentView