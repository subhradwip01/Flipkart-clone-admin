import axiosInstance from "../helpers/axios"
import { productConstants } from "./constant"

export const getProduct = () =>{
    return async dispatch=>{
        try{
            dispatch({
                type:productConstants.GET_ALL_PRODUCTS_REQUEST
            })

            const res = await axiosInstance.get("/product/getproducts")
            dispatch({
                type:productConstants.GET_ALL_PRODUCTS_SUCCESS,
                payload:{
                    products:res.data.products
                }
            })
        }catch(e){
            dispatch({
                type:productConstants.GET_ALL_PRODUCTS_FAILURE,
                payload:{
                    message: e.response.data.message || e.response.data.errors,
                }
            })
        }
    }
}

export const addProduct = (product) =>{
    return async dispatch=>{
        const productInfo = product;
        console.log(productInfo)
        try {
            dispatch({
                type:productConstants.ADD_NEW_PRODUCT_REQUEST
            })
            const res = await axiosInstance.post("/product/create",productInfo)
            console.log(res.data)
            dispatch({
                type:productConstants.ADD_NEW_PRODUCT_SUCCESS,
                payload:{
                   product:res.data.product
                }
            })
        } catch (e) {
            console.log(e)
            dispatch({
                type:productConstants.ADD_NEW_PRODUCT_FAILURE,
                payload:{
                    message: e.response.data.message || e.response.data.errors,
                }
            })
        }
    }
}