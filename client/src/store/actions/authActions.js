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
  axios
    .post(`${url.registerUrl}`, userData)
    .then(res => {
      debugger;
    })
    .catch(err => {
      debugger;
    })
    .finally(() => {
      debugger;
      dispatch(loadingStop());
    });
};
