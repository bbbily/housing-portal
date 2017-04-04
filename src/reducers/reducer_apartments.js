import { FETCH_APARTMENTS } from "../actions/action_apartments";

const INITIAL_STATE = { apartments: [] }

export default function(state=INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_APARTMENTS:
      // console.log(action.payload.data);
      return { apartments: action.payload.data.results};
    default:
      return state;
  }
}
