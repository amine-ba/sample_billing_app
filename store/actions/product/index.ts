import { Product } from "./../../reducers/product/state";
export interface Action<TData = {}> {
  type: string;
  data: TData;
}
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const UPDATE_BILLING_STATE = "UPDATE_BILLING_STATE";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const addProduct = (product: Product) => {
  return {
    type: ADD_PRODUCT,
    data: product,
  };
};

export const deleteProduct = () => {
  return {
    type: DELETE_PRODUCT,
  };
};

export const updateState = (state: any) => {
  return {
    type: UPDATE_BILLING_STATE,
    data: state,
  };
};
