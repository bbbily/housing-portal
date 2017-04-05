import FETCH_APARTMENTS  from "../actions/action_apartments";

const INITIAL_STATE = { apartments: [] }

export default function(state=INITIAL_STATE, action) {
  console.log("reducer");
  switch (action.type) {
    case "FETCH_APARTMENTS":
      console.log("data", action.payload.data);
      return { apartments: action.payload.data};
      break;
    default:
      return state;
  }
}
