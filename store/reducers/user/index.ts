import { initialState } from "./state";
import {
  LOAD_USER,
  USER_LOADED,
  RECEIVE_ERROR,
  LOGOUT_USER,
  Action,
} from "../../actions/user";
const user = (state = initialState, action: Action) => {
  switch (action.type) {
    case LOAD_USER:
      return Object.assign({}, state, {
        isLoading: true,
        user: null,
        isError: false,
      });
    case USER_LOADED:
      return Object.assign({}, state, {
        user: action.data,
        isLoading: false,
        isError: false,
      });
    case RECEIVE_ERROR:
      return Object.assign({}, state, {
        user: null,
        isError: true,
        isLoading: false,
      });
    case LOGOUT_USER:
      return Object.assign({}, state, {
        user: null,
        isLoading: false,
        isError: false,
      });
    default:
      return state;
  }
};

export default user;
