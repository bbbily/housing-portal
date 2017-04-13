import React, { Component } from "react";
import NavBar from "../../NavBar";
import PayDeposit from "./PayDeposit";
import RoommateInfo from "./RoommateInfo";
import WorkOrder from "./SubmitWorkOrder";
import Accommodations from "./Accommodations";

class StudentView extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <div>
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