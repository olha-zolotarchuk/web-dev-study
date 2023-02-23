import React from "react";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
// import Cart from "./Cart";
import ProductCart from "./Product/ProductsCart";

function App() {
  // const API_URL = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        // console.log(data)
        setProducts(data.products);
      } catch (err) {
        console.log(err);
      }
    };

    fetchItems();
  }, []);

  return (
    <React.Fragment>
      <div className="App">
        <Nav />
        {/* <Cart products={products} /> */}
        <ProductCart products={products} />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
