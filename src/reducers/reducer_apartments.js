import { GET_APARTMENTS, 
        CREATE_APARTMENT, 
        GET_ADDRESS, 
        CREATE_ADDRESS, 
        GET_CAMPUSES,
        GET_ROOMS }  from "../actions/action_apartments";




const INITIAL_STATE = { all: [], 
                        apartment_id: "",
                        rooms: [] };

export function apartmentsReducer(state=INITIAL_STATE, action) {

  switch (action.type) {
    case GET_APARTMENTS:
      return { all: action.payload.data};
      break;
    case CREATE_APARTMENT:
      return {
        all: [...state.all, action.payload.data],
        apartment_id: action.payload.data.id
      };
      break;
    case GET_ROOMS:
      return  {rooms: action.payload.data }
    default:
      return state;
  }
}

export function addressReducer(state=INITIAL_STATE, action) {

  switch (action.type) {
    case GET_ADDRESS:
      console.log("data", action.payload.data);
      return { all: action.payload.data};
      break;
    case CREATE_ADDRESS:
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
