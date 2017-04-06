import React, { Component } from "react";
import StudentListFilter from "../../../containers/StudentListFilter";
import StudentCards from "./StudentCards";
import "../../../styles/student.scss";

class Student extends Component {
    render() {
        const students = [{
        "name": "weeeeeee",
        "age": "54",
        "gender": "fishgfgt",
        "cohort": "DM90"},
        {
        "name": "asdf",
        "age": "69",
        "gender": "fish",
        "cohort": "DM90"},
        {
        "name": "asdf",
        "age": "69",
        "gender": "fish",
        "cohort": "DM90"},
        {
        "name": "asdf",
        "age": "69",
        "gender": "fish",
        "cohort": "DM90"},
        {
        "name": "asdf",
        "age": "69",
        "gender": "fish",
        "cohort": "DM90"},
        {
        "name": "asdf",
        "age": "69",
        "gender": "fish",
        "cohort": "DM90"},
        {
        "name": "asdf",
        "age": "69",
        "gender": "fish",
        "cohort": "DM90"},
        {
        "name": "asdf",
        "age": "69",
        "gender": "fish",
        "cohort": "DM90"}
        ]
        const StudentList = students.map(students => (
           <li> <StudentCards
                name={students.name}
                age={students.age}
                gender={students.gender}
                cohort={students.cohort}
                /></li>
        ))
        return (
            <div>
                <div>
                    <StudentListFilter />
                </div>
                <div>
                    <ul className="student-cards">
                        {StudentList}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Student