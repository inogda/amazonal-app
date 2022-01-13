import {PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS} from "../constants/productConstants";
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