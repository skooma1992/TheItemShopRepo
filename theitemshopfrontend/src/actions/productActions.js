import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCESS, PRODUCT_LIST_FAIL,PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from "../constants/productConstants"
import axios from 'axios';

// LIST OF PRODUCTS WITH DISPATCH

const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST});
        const { data } = await axios.get("api/products");
        dispatch({ type: PRODUCT_LIST_SUCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });

    }


    // PRODUCT DETAILS LIST WITH DISPATCH
}
const detailsProduct = (productId) => async (dispatch) => {
    try{
        dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productId});
        const {data} = await axios.get("/api/products/" + productId);
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data});
    }catch (error){
        dispatch({type: PRODUCT_DETAILS_FAIL, payload: error.message});
    }
}

export { listProducts, detailsProduct  }