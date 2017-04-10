import React, { Component } from "react";
import { Panel } from "react-bootstrap";
// import StudentModal from "./StudentModal";
import TestStudent from "./TestStudent";
// import "../../../styles/studentcard.scss";
import "../../../styles/teststudent.scss";

class StudentCards extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false
        };
    }

    render() {
        const title = {
            image: this.props.image,
            name: this.props.name,
            age: this.props.age,
            gender: this.props.gender,
            cohort: this.props.cohort
        }
        const heading = {
            image: this.props.image,
            name: this.props.name,
            age: this.props.age,
            gender: this.props.gender,
            cohort: this.props.cohort
        }
        const body = {
            room: this.props.room,
            address: this.props.address,
            eligibility: this.props.eligibility,
            deposit_paid: this.props.deposit_paid
        }
        return (
            <div>
                <TestStudent
                    title={title}
                    heading={heading}
                    body={body}
                    className="student-modal">
                </ TestStudent>
            </div>
        )
    }
}

export default StudentCards