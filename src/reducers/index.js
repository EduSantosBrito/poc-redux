import { clickReducer } from "./clickReducer";
import { addReducer } from "./addReducer";
import { combineReducers } from "redux";

export const Reducers = combineReducers({
  clickState: clickReducer,
  countState: addReducer
});
