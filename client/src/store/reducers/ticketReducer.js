import * as types from "../../utils/actionTypes";

const initialState = () => {
  return {
    loading: false,
    error: null,
    tickets: null
  };
};

export const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING_START:
      return {
        loading: true,
        error: false
      };
    case types.GET_ALL_TICKET_SUCCESS:
      return {
        loading: false,
        error: false,
        tickets: action.payload
      };
    case types.GET_ALL_TICKET_FAIL:
      return {
        loading: false,
        error: action.payload
      };
    case types.LOADING_STOP:
      return {
        loading: false,
        error: null
      };
    default:
      return state;
  }
};
