import { FETCH_APARTMENTS } from "../actions/action_apartments";

export default function(state={}, action) {
  switch (action.type) {
    case FETCH_APARTMENTS:
      console.log(action.payload);
      return { apartments: action.payload};
    default:
      return state;
  }
}
