import { combineReducers } from "redux";
import ApartmentsReducer from "./reducer_apartments";

const rootReducer = combineReducers({
  apartments: ApartmentsReducer
});

export default rootReducer;
