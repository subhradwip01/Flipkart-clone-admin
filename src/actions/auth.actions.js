import { authConstants } from "./constant";

export const login = (user) => {
  return (dispatch) => {
    dispatch({
      type: authConstants.LOGIN_REQUEST,
      payload: {
        ...user
      },
    });
  };
};
