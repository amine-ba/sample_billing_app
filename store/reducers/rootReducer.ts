import { combineReducers } from "redux";
import UserReducer from "./user";
import ProductsReducer from "./product";

export default combineReducers({
  products: ProductsReducer,
  user: UserReducer,
});
