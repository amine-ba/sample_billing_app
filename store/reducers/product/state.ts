export interface State {
  productList: [Product] | [];
  billingState: BillingState;
}
export interface Product {
  id: string;
  price: number;
  No: number;
  name: string;
}
export interface BillingState {
  name: "AL" | "TA";
  tax: number;
}
export const initialState: State = {
  productList: [],
  billingState: { name: "AL", tax: 4 },
};
