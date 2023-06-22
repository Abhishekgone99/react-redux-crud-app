import {
  ADD_USER,
  DELETE_USER,
  GET_SINGLE_USER,
  GET_USERS,
  UPDATE_USER,
} from "./actionTypes";

const initialState = {
  loading: true,
  users: [],
  user: {},
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        loading: false,
      };
    case ADD_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_SINGLE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
