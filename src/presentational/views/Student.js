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
      // housing: false,
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

    componentDidMount() {
      this.props.dispatch(getStudents())
    }
    

    render() {
        let students = [{
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
            "name": "Jeremy Gray",
            "age": "54",
            "gender": "Male",
            "cohort": "DM19",
            "room": "205",
            "address": "Boston, MA",
            "eligibility": true,
            "deposit_paid": false},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
            "name": "Peng Wu",
            "age": "70",
            "gender": "Male",
            "cohort": "DM19",
            "room": "201",
            "address": "Nephi, UT",
            "eligibility": false,
            "deposit_paid": true},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
            "name": "Steven Gray",
            "age": "18",
            "gender": "Male",
            "cohort": "DM19",
            "room": "206",
            "address": "Moab, UT",
            "eligibility": true,
            "deposit_paid": true},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
            "name": "Paige Busch",
            "age": "99",
            "gender": "Female",
            "cohort": "DM19",
            "room": "200",
            "address": "Draper, UT",
            "eligibility": false,
            "deposit_paid": false},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
            "name": "Sterling Chin",
            "age": "3",
            "gender": "Male",
            "cohort": "DM15",
            "room": "206",
            "address": "Alpine, UT",
            "eligibility": true,
            "deposit_paid": true},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
            "name": "Jon Myrick",
            "age": "12",
            "gender": "Male",
            "cohort": "DM12",
            "room": "201",
            "address": "Provo, UT",
            "eligibility": true,
            "deposit_paid": false},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
            "name": "Gustav Nordstrom",
            "age": "69",
            "gender": "Male",
            "cohort": "DM15",
            "room": "206",
            "address": "Sarasota, FL",
            "eligibility": false,
            "deposit_paid": true},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
            "name": "Chase Derr",
            "age": "9",
            "gender": "Male",
            "cohort": "DM23",
            "room": "206",
            "address": "Draper, UT",
            "eligibility": true,
            "deposit_paid": true},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",            
            "name": "Missy Beutler",
            "age": "25",
            "gender": "Female",
            "cohort": "DM10",
            "room": "200",
            "address": "Orem, UT",
            "eligibility": "Yes",
            "deposit_paid": "Yes"},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",            
            "name": "Maddie Humphreys",
            "age": "21",
            "gender": "Female",
            "cohort": "DM1",
            "room": "211",
            "address": "Boise, ID",
            "eligibility": "Yes",
            "deposit_paid": "No"},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",            
            "name": "Sang Ahn",
            "age": "98",
            "gender": "Male",
            "cohort": "DM16",
            "room": "208",
            "address": "Provo, UT",
            "eligibility": "No",
            "deposit_paid": "No"},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
            "name": "Megan Fisher",
            "age": "25",
            "gender": "Female",
            "cohort": "DM19",
            "room": "204",
            "address": "Idaho Falls, ID",
            "eligibility": true,
            "deposit_paid": true}
        ];

       let state = this.state;

        ["housing", "deposit_paid", "age", "accomodations"].forEach(function(filterBy) {
          let filterValue = state[filterBy];
          if (filterValue) {
            if (filterBy === "age" && state[filterBy] >= 21) {
              students = students.filter(function(student) {
                return student[filterBy] >= 21;
              })
            } else {
              students = students.filter(function(student) {
                return student[filterBy];
              })
            }
          }
        })
        console.log(this.props.all)
        const StudentList = this.props.all.map(students => (
         
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
                /></li>
        ))
        return (
            <div>
            <NavBar />
                <div>
                    <StudentListFilter housing={ this.state.housing } deposit_paid={ this.state.deposit_paid } age={ this.state.age } handleChecked={ this.handleChecked.bind(this) }/>
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
