import React from "react";
import { useState, useEffect } from "react";
// import Nav from "./Nav";
// import Footer from "./Footer";
// import Cart from "./Cart";
import ProductPage from "./Product/ProductsPage";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";

import Layout from "./Layout";

function App() {
  const API_URL = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        // console.log(data)
        // console.log(data.products);
        setProducts(data.products);
      } catch (err) {
        console.log(err);
      }
    };

    fetchItems();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductPage products={products} />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;

// <>
//   <Nav />
//   <Routes>
//     <Route path="/" element={<ProductPage products={products} />}></Route>
//     <Route path="/cart" element={<Cart />}></Route>
//     <Route element={<Footer />}></Route>
//     {/* <div className="App">
//       <Nav />
//       <ProductPage products={products} />
//       {/* <Cart products={products} /> */}
//     {/* <Footer /> */}
//   </Routes>
//   <Footer />
// </>
