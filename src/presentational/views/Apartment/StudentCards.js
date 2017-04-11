import React, { Component } from "react";
import "../../../styles/studentcard.scss";
import StudentModal from "../StudentList/StudentModal";

class StudentCards extends Component {
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
            <div className="card-container">
                <StudentModal
                    title={title}
                    heading={heading}
                    body={body}>
                </StudentModal>
            </div>
        )
    }
}

export default StudentCards