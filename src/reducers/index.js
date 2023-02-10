import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import registerReducers from "./register.reducers";

const rootReducers = combineReducers({
    auth: authReducers,
    register: registerReducers
})

export default rootReducers