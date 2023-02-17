import axiosInstance from "../helpers/axios"
import { categoryConstasnts } from "./constant"

export const getCategory = () =>{
    return async dispatch=>{
        try{
            dispatch({
                type:categoryConstasnts.GET_ALL_CATEGORIES_REQUEST
            })

            const res = await axiosInstance.get("/category/getcategories")
            dispatch({
                type:categoryConstasnts.GET_ALL_CATEGORIES_SUCCESS,
                payload:{
                    categories:res.data.categoryList
                }
            })
        }catch(e){
            dispatch({
                type:categoryConstasnts.GET_ALL_CATEGORIES_FAILURE,
                payload:{
                    message: e.response.data.message || e.response.data.errors,
                }
            })
        }
    }
}