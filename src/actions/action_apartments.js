import axios from "axios";

export const GET_APARTMENTS = "GET_APARTMENTS";
export const CREATE_APARTMENT = "CREATE_APARTMENT";
export const CREATE_ADDRESS = "CREATE_ADDRESS";
export const GET_ADDRESS = "GET_ADDRESS";
export const GET_CAMPUSES = "GET_CAMPUSES";


export function getApartments() {
  const url = "api/apartments";
  const request = axios.get(url);
  console.log("request", request);
  return {
    type: GET_APARTMENTS,
    payload: request
  }
}

export function createApartment(props) {
  const url = "/api/apartments";
  const request = axios.post(url, props)
  console.log("create",request);
  console.log("prp",props);

  return {
    type: CREATE_APARTMENT,
    payload: request
  }
}

export function createAddress(props) {
  const url = "/api/building";
  const request = axios.post(url, props)
  console.log("ADDRESS",request);

  return {
    type: CREATE_ADDRESS,
    payload: request
  }
}

export function getCampuses() {
  const url = "api/campus";
  const request = axios.get(url);
  console.log("request", request);
  return {
    type: GET_CAMPUSES,
    payload: request
  }
}
