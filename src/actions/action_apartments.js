import axios from "axios";

export const FETCH_APARTMENTS = "FETCH_APARTMENTS";

const ROOT_URL = "http://swapi.co/api/people/";

export function fetchApartments() {
  const url = `${ROOT_URL}`;
  const request = axios.get(url);

  return {
    type: FETCH_APARTMENTS,
    payload: request
  }
}
