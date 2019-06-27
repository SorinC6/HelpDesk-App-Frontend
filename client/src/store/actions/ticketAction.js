import axios from "axios";
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
