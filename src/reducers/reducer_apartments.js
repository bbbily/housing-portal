import { GET_APARTMENTS, CREATE_APARTMENT }  from "../actions/action_apartments";

const INITIAL_STATE = { all: [], apartment_id: "" };

export default function(state=INITIAL_STATE, action) {

  switch (action.type) {
    case GET_APARTMENTS:
      console.log("data", action.payload.data);
      return { all: action.payload.data};
      break;
    case CREATE_APARTMENT:
      console.log("data", action.payload.data);
      return { apartment_id: action.payload.data};
      break;
    default:
      return state;
  }
}
