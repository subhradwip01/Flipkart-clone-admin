import { productConstants } from "../actions/constant";

const initialState = {
  loading: false,
  products: [],
  error: null,
  errorMessage: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case productConstants.GET_ALL_PRODUCTS_REQUEST:
      state = {
        ...state,
        loading: true,
        error: null,
        errorMessage: "",
      };
      break;
    case productConstants.GET_ALL_PRODUCTS_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: false,
        errorMessage: "",
        products: action.payload.products,
      };
      break;
    case productConstants.GET_ALL_PRODUCTS_FAILURE:
      state = {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload.message,
      };
      break;
    case productConstants.ADD_NEW_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
        error: false,
        errorMessage: "",
      };
      break;
    case productConstants.ADD_NEW_PRODUCT_SUCCESS:
      
      state = {
        ...state,
        loading: true,
        error: false,
        errorMessage: "",
        products:[...state.products, action.payload.product]
        
      };
      break;
    case productConstants.ADD_NEW_PRODUCT_FAILURE:
      state = {
        ...state,
        error: true,
        loading: false,
        errorMessage: action.payload.message,
      };
      break;
  }
  return state;
};
