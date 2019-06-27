import * as types from "../../utils/actionTypes";

const initialState = () => {
  let token = localStorage.getItem("token");
  return {
    loading: false,
    error: null,
    isLoggedIn: token,
    userInfo: null
  };
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        userInfo: action.payload
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case types.LOADING_STOP:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
