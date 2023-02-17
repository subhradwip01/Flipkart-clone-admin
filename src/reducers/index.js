import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import registerReducers from "./register.reducers";
import productReducers from "./product.reducers";
import orderReducers from "./order.reducer";
import categoryReducers from "./category.reducer"

const rootReducers = combineReducers({
    auth: authReducers,
    register: registerReducers,
    product: productReducers,
    order: orderReducers,
    category: categoryReducers
})

export default rootReducers