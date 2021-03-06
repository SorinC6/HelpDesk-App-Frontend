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
      dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });
      return res.status;
    })
    .catch(err => {
      dispatch({
        type: types.REGISTER_FAIL,
        payload: err.response.data.message
      });
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
      localStorage.setItem("token", res.data.token);
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.token });
      return res.status;
    })
    .catch(err => {
      dispatch({ type: types.LOGIN_FAIL, payload: err.response.data.message });
    })
    .finally(() => {
      dispatch(loadingStop());
    });
};
