import { combineReducers } from "redux";
import ApartmentsReducer from "./reducer_apartments";

import {adminReducer, cohortReducer} from "./reducer_admin";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  apartments: ApartmentsReducer,
  form: formReducer,
  admin: adminReducer,
  cohort: cohortReducer
});

export default rootReducer;
