import {
  GET_PET,
  GET_PETS,
  GET_PETS_FAIL,
  GET_PET_FAIL,
} from "../actions/types";

export const initialState = {
  pets: [],
  petInfo: null,
  loading: true,
  like: false,
  error: {},
};

export const petReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PETS:
      return {
        ...state,
        pets: action.payload,
        loading: false,
      };
    case GET_PETS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_PET:
      return {
        ...state,
        petInfo: action.payload,
        loading: false,
      };
    case GET_PET_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
