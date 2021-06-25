export interface Action<TData = {}> {
  type: string;
  data: TData;
}
export const LOAD_USER = "LOAD_USER";
export const USER_LOADED = "USER_LOADED";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_ERROR = "RECEIVE_ERROR";

export const load_user = () => {
  return {
    type: LOAD_USER,
  };
};

export const loaded_user = (username: string) => {
  return {
    type: USER_LOADED,
    data: username,
  };
};

export const logOut_user = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const receive_error = () => {
  return {
    type: RECEIVE_ERROR,
  };
};

export const loadUser = (username: string, password: string) => {
  return function (
    dispatch: (arg0: { type: string; data?: string }) => void,
    getState: any
  ) {
    dispatch(load_user());
    setTimeout(() => {
      dispatch(loaded_user(username));
    }, 5000);
  };
};
