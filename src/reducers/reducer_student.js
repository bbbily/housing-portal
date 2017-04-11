
const INITIAL_STATE = {
  all: []
}

import {EDIT_STUDENT, GET_STUDENTS} from "../actions/action_student"

export function studentReducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case GET_STUDENTS:
    console.log("Reducer:", action.payload.data)
      return {all: action.payload.data}
      break;
    case EDIT_STUDENT :
      // let newStudent = state.all.filter( student => student.id !== action.payload.data.id)
      return {all: action.payload.data}
  }
  return state;
}
