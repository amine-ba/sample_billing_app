import { initialState } from "./state";
import {
  DELETE_PRODUCT,
  UPDATE_BILLING_STATE,
  ADD_PRODUCT,
} from "../../actions/product";
const product = (state = initialState, action: { type: any; data: any }) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        productList: [...state.productList, action.data],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        productList: [],
      };
    case UPDATE_BILLING_STATE:
      return {
        ...state,
        billingState: action.data,
      };
    default:
      return state;
  }
};

export default product;
