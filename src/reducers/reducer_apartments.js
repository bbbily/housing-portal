import { GET_APARTMENTS, CREATE_APARTMENT }  from "../actions/action_apartments";
import { GET_BUILDINGS, CREATE_BUILDING }  from "../actions/action_apartments";
import { GET_CAMPUSES }  from "../actions/action_apartments";

const INITIAL_STATE = { all: [], apartment_id: "" };

export function apartmentsReducer(state=INITIAL_STATE, action) {

  switch (action.type) {
    case GET_APARTMENTS:
      console.log("data", action.payload.data);
      return { all: action.payload.data};
      break;
    case CREATE_APARTMENT:
      console.log("data", action.payload.data);
      return {
        all: [...state.all, action.payload.data],
        apartment_id: action.payload.data.id
      };
      break;
    default:
      return state;
  }
}

export function buildingReducer(state=INITIAL_STATE, action) {

  switch (action.type) {
    case GET_BUILDINGS:
      console.log("data", action.payload.data);
      return { all: action.payload.data};
      break;
    case CREATE_BUILDING:
      console.log("data", action.payload.data);
      return { all: [...state.all, action.payload.data] };
      break;
    default:
      return state;
  }
}

export function campusReducer(state=INITIAL_STATE, action) {

  switch (action.type) {
    case GET_CAMPUSES:
      console.log("data", action.payload.data);
      return { all: action.payload.data};
      break;
    default:
      return state;
  }
}
