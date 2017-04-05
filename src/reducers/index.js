import { combineReducers } from "redux";
import ApartmentsReducer from "./reducer_apartments";
import AdminReducer from "./reducer_admin";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  apartments: ApartmentsReducer,
  form: formReducer,
  admin: AdminReducer
});

export default rootReducer;
