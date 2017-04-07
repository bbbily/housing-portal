import axios from "axios";

export const GET_APARTMENTS = "GET_APARTMENTS";
export const CREATE_APARTMENT = "CREATE_APARTMENT";


export function fetchApartments() {
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
