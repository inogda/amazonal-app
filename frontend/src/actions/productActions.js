import {
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS
} from "../constants/productConstants";
import Axios from "axios";

export const listProducts = () => async (dispatch) => {
    // делаю диспатч на вывод лоадинга крутилки
    dispatch({type: PRODUCT_LIST_REQUEST});
    try {
        // если асинхронній запрос успешний то делаю диспатч на вывод данных
        const {data}=await Axios.get( '/api/products' );
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
    } catch (error) {
        // если асинхронній запрос не прошел, то делаю диспатч на вывод ошибки
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message })
    }
}

export const detailsProduct = (productId) => async (dispatch) => {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
    try {
        const { data } = await Axios.get(`/api/products/${productId}`);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};