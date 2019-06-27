import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { ticketReducer } from "./ticketReducer";

export default combineReducers({
  authReducer,
  ticketReducer
});
