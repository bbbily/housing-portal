import React, { Component } from "react";
import StudentListFilter from "../../../containers/StudentListFilter";
import StudentCards from "./StudentCards";
// import "../../../styles/student.scss";
import "../../../styles/teststudent.scss";


class Student extends Component {
    render() {
        const students = [{
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
            "name": "Jeremy Gray",
            "age": "54",
            "gender": "Male",
            "cohort": "DM19",
            "room": "205",
            "address": "Boston, MA",
            "eligibility": "Yes",
            "deposit_paid": "No"},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",          
            "name": "Peng Wu",
            "age": "70",
            "gender": "Male",
            "cohort": "DM19",
            "room": "201",
            "address": "Nephi, UT",
            "eligibility": "No",
            "deposit_paid": "Yes"},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",            
            "name": "Steven Gray",
            "age": "18",
            "gender": "Male",
            "cohort": "DM19",
            "room": "206",
            "address": "Moab, UT",
            "eligibility": "Yes",
            "deposit_paid": "Yes"},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",            
            "name": "Paige Busch",
            "age": "99",
            "gender": "Female",
            "cohort": "DM19",
            "room": "200",
            "address": "Draper, UT",
            "eligibility": "No",
            "deposit_paid": "No"},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",            
            "name": "Sterling Chin",
            "age": "3",
            "gender": "Male",
            "cohort": "DM15",
            "room": "206",
            "address": "Alpine, UT",
            "eligibility": "Yes",
            "deposit_paid": "Yes"},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",            
            "name": "Jon Myrick",
            "age": "12",
            "gender": "Male",
            "cohort": "DM12",
            "room": "201",
            "address": "Provo, UT",
            "eligibility": "Yes",
            "deposit_paid": "No"},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",            
            "name": "Gustav Nordstrom",
            "age": "69",
            "gender": "Male",
            "cohort": "DM15",
            "room": "206",
            "address": "Sarasota, FL",
            "eligibility": "No",
            "deposit_paid": "Yes"},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",            
            "name": "Chase Derr",
            "age": "9",
            "gender": "Male",
            "cohort": "DM23",
            "room": "206",
            "address": "Draper, UT",
            "eligibility": "Yes",
            "deposit_paid": "Yes"},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",            
            "name": "Megan Fisher",
            "age": "25",
            "gender": "Female",
            "cohort": "DM19",
            "room": "204",
            "address": "Idaho Falls, ID",
            "eligibility": "Yes",
            "deposit_paid": "Yes"},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",            
            "name": "Megan Fisher",
            "age": "25",
            "gender": "Female",
            "cohort": "DM19",
            "room": "204",
            "address": "Idaho Falls, ID",
            "eligibility": "Yes",
            "deposit_paid": "Yes"},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",            
            "name": "Megan Fisher",
            "age": "25",
            "gender": "Female",
            "cohort": "DM19",
            "room": "204",
            "address": "Idaho Falls, ID",
            "eligibility": "Yes",
            "deposit_paid": "Yes"},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",            
            "name": "Megan Fisher",
            "age": "25",
            "gender": "Female",
            "cohort": "DM19",
            "room": "204",
            "address": "Idaho Falls, ID",
            "eligibility": "Yes",
            "deposit_paid": "Yes"}
        ]
        const StudentList = students.map(students => (
           <li> <StudentCards
                image={students.image}
                name={students.name}
                age={students.age}
                gender={students.gender}
                cohort={students.cohort}
                room={students.room}
                address={students.address}
                eligibility={students.eligibility}
                deposit_paid={students.deposit_paid}
                /></li>
        ))
        return (
            <div>
                <div>
                    <StudentListFilter />
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

export default Student