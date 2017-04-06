import axios from "axios";

export const GET_ADMINS = "GET_ADMINS";
export const CREATE_ADMIN = "CREATE_ADMIN";
export const DELETE_ADMIN = "DELETE_ADMIN";
export const EDIT_ADMIN = "EDIT_ADMIN";

export function getAdmins() {
  const url = "/api/users";
  const request = axios.get(url);
  // console.log("request", request);
  return {
    type: GET_ADMINS,
    payload: request
  }
}
export function createAdmin(userObj) {
  const url = "/api/users";
  const request = axios.post(url, userObj);
  return {
    type: CREATE_ADMIN,
    payload: request
  }
}
export function deleteAdmin(userObj) {
  const url = "/api/users";
  const request = axios.delete(url, userObj);
  return {
    type: DELETE_ADMIN,
    payload: request
  }
}
export function editAdmin(userObj) {
  const url = "/api/users";
  const request = axios.put(url, userObj);
  return {
    type: EDIT_ADMIN,
    payload: request
  }
}


export const GET_COHORTS = "GET_COHORTS";
export const CREATE_COHORT = "CREATE_COHORT";
export const DELETE_COHORT = "DELETE_COHORT";
export const EDIT_COHORT = "EDIT_COHORT";


export function getCohorts() {
  const url = "/api/cohort";
  const request = axios.get(url);
  // console.log("request", request);
  return {
    type: GET_COHORTS,
    payload: request
  }
}
export function createCohort(cohortObj) {
  const url = "/api/cohort";
  const request = axios.post(url, cohortObj);
  return {
    type: CREATE_COHORT,
    payload: request
  }
}
export function deleteCohort(cohortObj) {
  const url = "/api/cohort";
  const request = axios.delete(url, cohortObj);
  return {
    type: DELETE_COHORT,
    payload: request
  }
}
export function editCohort(cohortObj) {
  const url = "/api/cohort";
  const request = axios.put(url, cohortObj);
  return {
    type: EDIT_COHORT,
    payload: request
  }
}