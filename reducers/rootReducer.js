import { combineReducers } from "redux";
import { petReducer } from "./petReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  pets: petReducer,
  user: userReducer,
});

export default rootReducer;
