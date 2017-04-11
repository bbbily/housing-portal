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
        // let students = [{
        //     "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
        //     "name": "Jeremy Gray",
        //     "age": "54",
        //     "gender": "Male",
        //     "cohort": "DM19",
        //     "room": "205",
        //     "address": "Boston, MA",
        //     "eligibility": true,
        //     "first_name": "ddd",
        //     "deposit_paid": false},
        //     {
        //     "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
        //     "name": "Peng Wu",
        //     "age": "70",
        //     "gender": "Male",
        //     "cohort": "DM19",
        //     "room": "201",
        //     "first_name": "dddaaaaaa",
        //     "address": "Nephi, UT",
        //     "first_name": "ddafdasfsadfsadfd",
        //     "eligibility": false,
        //     "deposit_paid": true},
        //     {
        //     "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
        //     "name": "Steven Gray",
        //     "age": "18",
        //     "gender": "Male",
        //     "first_name": "ddddfsadfadsfadsfdsafsadf",
        //     "cohort": "DM19",
        //     "room": "206",
        //     "address": "Moab, UT",
        //     "eligibility": true,
        //     "deposit_paid": true},
        //     {
        //     "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
        //     "name": "Paige Busch",
        //     "age": "99",
        //     "gender": "Female",
        //     "cohort": "DM19",
        //     "room": "200",
        //     "address": "Draper, UT",
        //     "first_name": "dddasdfadsfdsa",
        //     "eligibility": false,
        //     "deposit_paid": false},
        //     {
        //     "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
        //     "name": "Sterling Chin",
        //     "age": "3",
        //     "gender": "Male",
        //     "cohort": "DM15",
        //     "room": "206",
        //     "address": "Alpine, UT",
        //     "eligibility": true,
        //     "deposit_paid": true},
        //     {
        //     "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
        //     "name": "Jon Myrick",
        //     "age": "12",
        //     "gender": "Male",
        //     "cohort": "DM12",
        //     "room": "201",
        //     "address": "Provo, UT",
        //     "eligibility": true,
        //     "deposit_paid": false},
        //     {
        //     "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
        //     "name": "Gustav Nordstrom",
        //     "age": "69",
        //     "gender": "Male",
        //     "cohort": "DM15",
        //     "room": "206",
        //     "address": "Sarasota, FL",
        //     "eligibility": false,
        //     "deposit_paid": true},
        //     {
        //     "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
        //     "name": "Chase Derr",
        //     "age": "9",
        //     "gender": "Male",
        //     "cohort": "DM23",
        //     "room": "206",
        //     "address": "Draper, UT",
        //     "eligibility": true,
        //     "deposit_paid": true},
        //     {
        //     "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
        //     "name": "Missy Beutler",
        //     "age": "25",
        //     "gender": "Female",
        //     "cohort": "DM10",
        //     "room": "200",
        //     "address": "Orem, UT",
        //     "eligibility": true,
        //     "deposit_paid": true,
        //   "accomodations": "ddfasdf"},
        //     {
        //     "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
        //     "name": "Maddie Humphreys",
        //     "age": "21",
        //     "gender": "Female",
        //     "cohort": "DM1",
        //     "room": "211",
        //     "address": "Boise, ID",
        //     "eligibility": true,
        //     "deposit_paid": false},
        //     {
        //     "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
        //     "name": "Sang Ahn",
        //     "age": "98",
        //     "gender": "Male",
        //     "cohort": "DM16",
        //     "room": "208",
        //     "address": "Provo, UT",
        //     "eligibility": false,
        //     "accomodations": "ddfasdf",
        //     "first_name": "ddd",
        //     "deposit_paid": false},
        //     {
        //     "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
        //     "name": "Megan Fisher",
        //     "first_name": "ddd",
        //     "age": "25",
        //     "gender": "Female",
        //     "cohort": "DM19",
        //     "room": "204",
        //     "last_name": "afadfaf",
        //     "address": "Idaho Falls, ID",
        //     "eligibility": true,
        //     "deposit_paid": true,
        //     "accomodations": "ddfasdf"}
        // ];

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
                <li key={students.id}> <StudentCards
                image={students.image}
                name={`${students.first_name} ${students.last_name}`}
                first_name={ students.first_name }
                last_name={ students.last_name }
                age={moment().diff(students.dob, 'years', false)}
                gender={students.gender}
                cohort={students.cohort}
                room={students.room}
                address={`${students.street_address} in ${students.city}, ${students.state}, ${students.country}`}
                accomodations={students.accomodations}
                eligibility={students.eligibility}
                deposit_paid={students.deposit_paid}
                student_id={students.id}
                dob={ students.dob }
                email={ students.email }
                slack={ students.slack }
                phone={ students.phone }
                city={ students.city }
                state={ students.state }
                country={ students.country }
                post_code={ students.post_code }
                arrive_date={ students.arrive_date }
                leave_date={ students.leave_date }
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
