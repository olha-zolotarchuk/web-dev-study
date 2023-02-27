import React from "react";
import { useState, useEffect } from "react";
import ProductPage from "./Product/ProductsPage";
import { Route, Routes } from "react-router-dom";
import CartPage from "./CartPage";
import Layout from "./Layout";
import { useProducts } from "./services/useProducts";


function App() {
  const products = useProducts();

  const API_URL_CART = "http://localhost:3600/cart";
  const [cart, setCart] = useState([]);
  

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch(API_URL_CART);
        const dataCart = await response.json();
        // console.log(dataCart);
        setCart(dataCart);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCart();
  }, []);



    


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductPage products={products} />} />
        <Route
          path="cart"
          element={<CartPage
            cart={cart}
            />}
        />
      </Route>
    </Routes>
  );
}

export default App;
