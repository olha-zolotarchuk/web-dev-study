import React from "react";
import ProductPage from "./Product/ProductsPage";
import { Route, Routes } from "react-router-dom";
import CartPage from "./CartPage";
import Layout from "./Layout";
import { useProducts } from "./services/useProducts";

function App() {
  const products = useProducts();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductPage products={products} />} />
        <Route path="cart" element={<CartPage  />} />
      </Route>
    </Routes>
  );
}

export default App;
