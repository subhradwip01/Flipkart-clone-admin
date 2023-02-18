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

export const addCategory = (category) =>{
    return async dispatch=>{
        const categoryInfo = category;
        console.log(categoryInfo)
        try {
            dispatch({
                type:categoryConstasnts.ADD_NEW_CATEGORY_REQUEST
            })
            const res = await axiosInstance.post("/category/create",categoryInfo)
            console.log(res.data)
            dispatch({
                type:categoryConstasnts.ADD_NEW_CATEGORY_SUCCESS,
                payload:{
                   category:res.data.category
                }
            })
        } catch (e) {
            console.log(e)
            dispatch({
                type:categoryConstasnts.ADD_NEW_CATEGORY_FAILURE,
                payload:{
                    message: e.response.data.message || e.response.data.errors,
                }
            })
        }
    }
}