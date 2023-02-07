import axiosInstance from "../helpers/axios";
import { authConstants } from "./constant";

export const login = (user) => {
  return async (dispatch) => {
    let userInfo = user
    try {
      dispatch({ type: authConstants.LOGIN_REQUEST });

      const res = await axiosInstance.post("/admin/signin", {
        ...userInfo
      });

        const { token, user } = await res.data;
        localStorage.setItem("token", token);
        localStorage.setItem('user',JSON.stringify(user));

        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
    } catch (e) {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: {
          message: e.response.data.message || e.response.data.errors,
        },
      });
    }
  };
};



export const logOut = () =>{
  return async (dispatch) => {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
    dispatch({
      type: authConstants.LOGOUT_SCCESS,
      payload: {
        message: "Logged out sucessfully!"
      }
    })
  }
}