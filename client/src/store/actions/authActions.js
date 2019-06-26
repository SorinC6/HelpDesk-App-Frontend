import axios from "axios";
import * as types from "../../utils/actionTypes";
import * as url from "../../utils/urlFile";

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

export const registerUser = userData => dispatch => {
  dispatch(loadingStart());
  return axios
    .post(`${url.registerUrl}`, userData)
    .then(res => {
      debugger;
      dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });
      return res.status;
    })
    .catch(err => {
      debugger;
      dispatch({ type: types.REGISTER_FAIL, payload: err.response });
      return err.response.status;
    })
    .finally(() => {
      dispatch(loadingStop());
    });
};

export const loginUser = userData => dispatch => {
  dispatch(loadingStart());
  return axios
    .post(`${url.loginUrl}`, userData)
    .then(res => {
      debugger;
    })
    .catch(err => {
      debugger;
    })
    .finally();
};
