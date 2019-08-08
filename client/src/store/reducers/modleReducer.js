import * as types from "../../utils/actionTypes";

const initialState = {
  showAddModal: false
};

export const modalReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.TOGGLE_MODLE:
      return {
        ...state,
        showAddModal: !state.showAddModal
      };
    default:
      return state;
  }
};
