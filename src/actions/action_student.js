import axios from "axios"

export const GET_STUDENTS = "GET_STUDENTS"
export const EDIT_STUDENT = "EDIT_STUDENT"

export function getStudents() {
  const url = "/api/cohort/student"
  const request = axios.get(url)
  console.log(request)
  return {
    type: GET_STUDENTS,
    payload: request
  }
}

export function editStudent(studentObj) {
  console.log("obj", studentObj)
  const url = "/api/student";
  const request = axios.put(url, studentObj)
  return {
    type: EDIT_STUDENT,
    payload: request
  }
}
