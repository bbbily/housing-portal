import {GET_ADMINS, CREATE_ADMIN, DELETE_ADMIN, EDIT_ADMIN} from "../actions/action_admin"
import { GET_COHORTS, CREATE_COHORT, DELETE_COHORT, EDIT_COHORT } from '../actions/action_admin'

const INITIAL_STATE = { all: [], admin: {}, cohort: {} };

export default function(state=INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ADMINS:
    // console.log("actions", action.payload)
      return { all: action.payload.data }
      break;
    case CREATE_ADMIN:
      return { all: [...state.all, action.payload.data] }
      break;
    case DELETE_ADMIN:
      return { all: state.all.filter( admin => { admin.id !== action.payload.data.id}) }
      break;
    case EDIT_ADMIN:
    let newAdmin = state.all.filter( admin => { admin.id !== action.payload.data.id})
      return { all: [...newAdmin, action.payload.data] }
      break;
    case GET_COHORTS:
      return { all: action.payload.data }
      break;
    case CREATE_COHORT:
      return { all: [...state.all, action.payload.data] }
      break;
    case DELETE_COHORT:
      return { all: state.all.filter( cohort => { cohort.id !== action.payload.data.id}) }
      break;
    case EDIT_COHORT:
      let newCohort = state.all.filter( cohort => {cohort.id !== action.payload.data.id})
      return { all: [...newCohort, action.payload.data] }
      break;
    default:
      return state;
  }
}
