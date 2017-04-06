import {GET_ADMINS, CREATE_ADMIN, DELETE_ADMIN, EDIT_ADMIN} from "../actions/action_admin"

const INITIAL_STATE = { all: [], admin: {} };

export default function(state=INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ADMINS:
    console.log("actions", action.payload.data)
      return { all: action.payload.data }
      break;
    case CREATE_ADMIN:
      return { all: [...state.all, action.payload.data] }
      break;
    case DELETE_ADMIN:
      return { all: state.all.filter( admin => { admin.id !== action.payload.data.id}) }
      break;
    case EDIT_ADMIN:
    const newAll = state.all.filter( admin => { admin.id !== action.payload.data.id })
    console.log("newAll", newAll, state.all, action.payload)
      return { all: [...newAll, action.payload.data] }
      break;
    default:
      return state;
  }
}
