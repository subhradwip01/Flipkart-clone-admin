import { authConstants } from "../actions/constant";

const initialState = {
  token: null,
  user: {},
  authenticated:false,
  authenticating : false,
  error:false,
  errorMessage:"",
  logoutMessage:"",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating:true,
        error:false,
        errorMessage:"",
        logoutMessage:"",
      };
      break;
    case authConstants.LOGIN_SUCCESS:
        state={
            ...state,
            token:action.payload.token,
            user: action.payload.user,
            authenticated:true,
            authenticating:false,
            error:false,
            errorMessage:"",
            logoutMessage:"",
        }
        break;
    case authConstants.LOGIN_FAILURE:
        state={
            ...state,
            authenticating:false,
            error:true,
            errorMessage:action.payload.message,
            logoutMessage:"",
        }
        break;
    case  authConstants.LOGOUT_SUCCESS:
      state = {
        ...initialState,
        logoutMessage:action.payload.message
      }
      break;  
    default:
        state={
            ...initialState
        }
        break
  }
  return state;
};
