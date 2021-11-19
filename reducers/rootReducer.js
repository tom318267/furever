import { combineReducers } from "redux";
import { petReducer } from "./petReducer";

const rootReducer = combineReducers({
  pets: petReducer,
});

export default rootReducer;
