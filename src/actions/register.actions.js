import axiosInstance from "../helpers/axios";
import { registerConstants } from "./constant";
export const signup = (user) =>{
    return async dispatch =>{
      let userInfo = user;
      try {
        dispatch({ type: registerConstants.USER_REGISTER_REQUEST });
  
        const res = await axiosInstance.post("/admin/signup", {
          ...userInfo
        });
  
          
  
          dispatch({
            type: registerConstants.USER_REGISTER_SUCCESS,
            payload: {
              message:res.data.message
            },
          });
      } catch (e) {
        dispatch({
          type: registerConstants.USER_REGISTER_FAILURE,
          payload: {
            message: e.response.data.message || e.response.data.errors,
          },
        });
      }
    }
  }