import { GET_PETS } from "../actions/types";

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
    default:
      return state;
  }
};
