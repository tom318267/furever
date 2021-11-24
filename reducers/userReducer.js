import {
  LOGIN,
  LOGIN_FAIL,
  SIGN_OUT,
  SIGN_UP,
  SIGN_UP_FAIL,
} from "../actions/types";

export const initialState = {
  user: null,
  error: {},
  selectedPet: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        user: action.payload,
      };
    case SIGN_UP_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        user: null,
        error: action.payload,
      };

    default:
      return state;
  }
};
