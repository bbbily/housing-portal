import React, { Component } from "react";
import StudentListFilter from "../../containers/StudentListFilter";
import StudentCards from "./StudentList/StudentCards";
import "../../styles/student.scss";
import "../../styles/teststudent.scss";
import NavBar from "../NavBar";
import {getStudents} from "../../actions/action_student"
import {connect} from 'react-redux'
import moment from "moment"

class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eligibility: false,
      deposit_paid: false,
      age: 0,
      accomodations: false,
      gender: "male"
    }
  }
    handleChecked(type, val) {
      this.setState({
        [type]: val
      })
    }

    componentWillMount() {
      this.props.dispatch(getStudents())
    }
    

    render() {
 
        
         // console.log(this.props.all)
         // let students = this.props.all
            let students = this.props.all;
         if (students[0]) {
          console.log("students", students, this.state)
          let state = this.state;
          ["housing", "deposit_paid", "age", "accomodations"].forEach(function(filterBy) {
          let filterValue = state[filterBy];
          if (filterValue) {
            if (filterBy === "age" && state[filterBy] >= 21) {
              students = students.filter(function(student) {
                console.log(student.dob)
                return moment().diff(student.dob, 'years', false) >= 21;
              })
            } else {
              students = students.filter(function(student) {
                return student[filterBy];
              })
            }
          }
        })
         }

        
        const StudentList = students.map(students => (
         
           <li> <StudentCards
                image={students.image}
                name={`${students.first_name} ${students.last_name}`}
                age={moment().diff(students.dob, 'years', false)}
                gender={students.gender}
                cohort={students.cohort}
                room={students.room}
                address={`${students.street_address} in ${students.city}, ${students.state}, ${students.country}`}
                eligibility={students.eligibility}
                deposit_paid={students.deposit_paid}
                accomodations={students.accomodations}
                /></li>
        ))
        return (
            <div>
            <NavBar />
                <div>
                    <StudentListFilter eligibility={ this.state.eligibility } 
                                      deposit_paid={ this.state.deposit_paid } 
                                      age={ this.state.age } 
                                      accomodations={ this.state.accomodations }
                                      handleChecked={ this.handleChecked.bind(this) }/>
                </div>

                <div className="student-cards">
                    <ul className="card-container">
                        {StudentList}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    all: state.students.all
  }
}
export default connect(mapStateToProps)(Student)
