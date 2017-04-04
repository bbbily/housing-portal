import axios from "axios";

export const FETCH_APARTMENTS = "FETCH_APARTMENTS";
export const CREATE_APARTMENT = "CREATE_APARTMENT";

const ROOT_URL = "http://swapi.co/api/people/";

export function fetchApartments() {
  const url = `${ROOT_URL}`;
  const request = axios.get(url);

  return {
    type: FETCH_APARTMENTS,
    payload: request
  }
}

export function createApartment(props) {
  const url = `${ROOT_URL}`;
  const request = axios.post(url, props)
  console.log(props);

  return {
    type: CREATE_APARTMENT,
    payload: request
  }
}
