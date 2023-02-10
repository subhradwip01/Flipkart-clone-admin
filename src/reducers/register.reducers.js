import { registerConstants } from "../actions/constant";
const initialState = {
    error:false,
    message: '',
    loading: false,
}
export default(state=initialState,action) => {
    switch(action.type){
        case registerConstants.USER_REGISTER_REQUEST:
            state={
                ...state,
                error:false,
                loading:true,
            }
            break;
        case registerConstants.USER_REGISTER_SUCCESS:
            state={
                ...state,
                loading:false,
                message:action.payload.message,
                error:false
            }
            break;
        case registerConstants.USER_REGISTER_FAILURE:
            state={
                ...state,
                error: true,
                loading:false,
                message:action.payload.message,
            }
            break;
        default:
            state={
                ...initialState
            }
            break;
        }
        return state
        
}