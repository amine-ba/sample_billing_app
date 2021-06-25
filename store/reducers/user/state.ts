export interface State {
  user: string | null;
  isLoading: boolean;
  isError: boolean;
}
export const initialState: State = {
  user: null,
  isLoading: false,
  isError: false,
};
