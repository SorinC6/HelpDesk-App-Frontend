import * as types from "../../utils/actionTypes";

const initialState = () => {
  return {
    loading: false,
    error: null,
    tickets: [],
    filteredTickets: []
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
    case types.GET_HELPING_TICKETS:
      return {
        ...state,
        filteredTickets: state.tickets.filter(ticket => {
          return ticket.status === "helping";
        })
      };
    case types.GET_PENDING_TICKETS:
      return {
        ...state,
        filteredTickets: state.tickets.filter(ticket => {
          return ticket.status === "pending";
        })
      };
    case types.GET_FIXED_TICKETS:
      return {
        ...state,
        filteredTickets: state.tickets.filter(ticket => {
          return ticket.status === "fixed";
        })
      };
    default:
      return state;
  }
};
