import { categoryConstasnts } from "../actions/constant"

const initialState ={
    loading:false,
    categories:[],
    error:null,
    errorMessage:""
}

export default (state= initialState,action) => {
    switch(action.type){
        case categoryConstasnts.GET_ALL_CATEGORIES_REQUEST:
            state={
                ...state,
                loading:true,
                error:null,
                errorMessage:""
            }
            break;
        case categoryConstasnts.GET_ALL_CATEGORIES_SUCCESS:
            state={
                ...state,
                loading:false,
                error:false,
                errorMessage:'',
                categories:action.payload.categories
            }
            break;
        case categoryConstasnts.GET_ALL_CATEGORIES_FAILURE:
            state={
                ...state,
                loading:false,
                error:true,
                errorMessage:action.payload.message
            }
            break;
    }
    return state 
}