import axios from "axios";

export const FETCH_APARTMENTS = "FETCH_APARTMENTS";
export const CREATE_APARTMENT = "CREATE_APARTMENT";


export function fetchApartments() {
  const url = "http://localhost:3000/api/users";
  const request = axios.get(url);
  console.log("request", request);
  return {
    type: "FETCH_APARTMENTS",
    payload: request
  }
}

export function createApartment(props) {
  const url = "/api";
  const request = axios.post(url, props)
  console.log("create",request);
  console.log("prp",props);

  return {
    type: CREATE_APARTMENT,
    payload: request
  }
}
