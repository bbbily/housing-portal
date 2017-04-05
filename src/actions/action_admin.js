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
