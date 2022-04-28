import * as types from "./actionType";

const initialState = {
  users: [],
  user: {},
  loading: true,
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.DELETE_USER:
      return {
        ...state,
        loading: false,
      };
    case types.ADD_USER:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case types.GET_SINGLE_USER:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case types.EDIT_USER:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducers;
