import React, { Component } from "react";
import StudentListFilter from "../../../containers/StudentListFilter";
import StudentCards from "./StudentCards";

class Student extends Component {
    render() {
        return (
            <div>
                <div>
                    <StudentListFilter />
                </div>
                <div>
                    <StudentCards />
                </div>
            </div>
        )
    }
}

export default Student