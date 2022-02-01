import axiosIntance from "../helpers/axios"
import { productConsts } from "./constants";

export const getProductsBySlug = (slug) =>{
    return async (dispatch) =>{
        //get request for the products
        const res = await axiosIntance.get(`/products/${slug}`);
        
        if(res.status == 200){
            dispatch({
                type: productConsts.GET_PRODUCTS_BY_SLUG_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: productConsts.GET_PRODUCTS_BY_SLUG_FALIURE
            });
        }
    }
}