import * as types from "../../utils/actionTypes";
import * as url from "../../utils/urlFile";
import axiosWithAuth from "../../utils/axiosConfig";

const loadingStart = () => {
  return {
    type: types.LOADING_START
  };
};

const loadingStop = () => {
  return {
    type: types.LOADING_STOP
  };
};

const getTicketsSuccess = data => {
  return {
    type: types.GET_ALL_TICKET_SUCCESS,
    payload: data
  };
};

const getTicketError = data => {
  return {
    type: types.GET_ALL_TICKET_FAIL,
    payload: data
  };
};

export const getAllTickets = () => dispatch => {
  dispatch(loadingStart());

  axiosWithAuth()
    .get(`${url.getTickets}`)
    .then(res => {
      dispatch(getTicketsSuccess(res.data.result));
    })
    .catch(err => {
      debugger;
      dispatch(getTicketError(err));
    })
    .finally(dispatch(loadingStop()));
};

export const getHelpingTickets = () => dispatch => {
  debugger;
  dispatch({ type: types.GET_HELPING_TICKETS });
};
export const getPendingTickets = () => dispatch => {
  dispatch({ type: types.GET_PENDING_TICKETS });
};
export const getFixedTickets = () => dispatch => {
  dispatch({ type: types.GET_FIXED_TICKETS });
};

export const getTicketByID = id => dispatch => {
  debugger;
};
