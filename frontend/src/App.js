import React from "react";
import './App.css';

import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";
import CartScreen from "./screen/CartScreen";

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {useSelector} from "react-redux";

function App() {

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;

    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <Link className="brand" to="/">
                            amazona
                        </Link>
                    </div>
                    <div>
                        <Link to="/cart">Cart
                            {cartItems.length > 0 && (
                                <span className="badge">{cartItems.length}</span>
                            )}
                        </Link>
                        <Link to="/signin">Sign In</Link>
                    </div>
                </header>
                <main>
                    <Routes>
                        <Route path="/cart/:id" element={<CartScreen/>} />
                        <Route path="/cart/" element={<CartScreen/>} />
                        <Route path="/" element={<HomeScreen/>} exact />
                        <Route path="/product/:id" element={<ProductScreen />} />
                    </Routes>
                </main>
                <footer className="row center">All right reserved</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
