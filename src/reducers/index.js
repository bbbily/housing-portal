import { combineReducers } from "redux";
import { apartmentsReducer, buildingReducer, campusReducer } from "./reducer_apartments";
import {adminReducer, cohortReducer} from "./reducer_admin";
import { reducer as formReducer } from "redux-form";
import { studentReducer } from "./reducer_student";
// import { modelReducer, formReducer } from "react-redux-form";
// import { createModelReducer, createFormReducer } from "redux-simple-form";

const rootReducer = combineReducers({
  apartments: apartmentsReducer,
  form: formReducer,
  admin: adminReducer,
  cohort: cohortReducer,
  building: buildingReducer,
  campus: campusReducer,
  students: studentReducer
});

export default rootReducer;
