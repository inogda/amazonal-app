import React from "react";
import './App.css';
import data from './data.js'
import Product from "./components/Product";

function App() {
    return (
        <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="/">amazonal</a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">Sign In</a>
                </div>
            </header>
            <main>
                <div className="row center">
                    {data.products.map( product => (

<Product key={product._id} product={product}></Product>



                    ) )

                    }


                </div>

            </main>
            <footer className="row center">Все права защищены</footer>
        </div>
    );
}

export default App;
