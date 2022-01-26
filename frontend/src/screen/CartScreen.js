import React, {useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {addToCart} from "../actions/cartActions";
import {useDispatch} from "react-redux";

function CartScreen(props) {

    // получаем параметры маршрута
    const params = useParams();
    // получаем productId
    const productId=params.id;
    // получаем параметры строки запроса
    //const [searchParams, setSearchParams] = useSearchParams();
    const [searchParams] = useSearchParams();
    // получаем гет параметр qty
    const qty = searchParams.get("qty")
        ? Number(searchParams.get("qty"))
        : 1;
    //debugger;
    const dispatch=useDispatch();
    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>ADD TO CART : productID: {productId} Qty: {qty}</p>
        </div>
    );
}

export default CartScreen;