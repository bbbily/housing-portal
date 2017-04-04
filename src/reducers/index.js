import { combineReducers } from "redux";
import ApartmentsReducer from "./reducer_apartments";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  apartments: ApartmentsReducer,
  form: formReducer
});

export default rootReducer;
