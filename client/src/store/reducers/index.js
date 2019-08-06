import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { ticketReducer } from "./ticketReducer";
import { modalReducer } from "./modleReducer";

export default combineReducers({
  authReducer,
  ticketReducer,
  modalReducer
});
