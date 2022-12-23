import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Categories } from "./pages/Categories";
import { Category } from "./pages/Category";
import { Users } from "./pages/Users";
import { Weathers } from "./pages/Weather";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="pages">
            <div className="page-home">
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/categories">Categories</Link>
            </div>
            <div>
              <Link to="/cart">Cart</Link>
              </div>
            <div>
              <Link to="/category">Category</Link>
              </div>
            <div>
              <Link to="/users">Users</Link>
              </div>
            <div>
              <Link to="/weathers">Weather</Link>
              </div>
          </ul>
        </nav>

        <Routes>

          <Route path="/categories" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
          
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/category/:categoryId" element={<Category />} />

          <Route path="/users" element={<Users/>} />
          <Route path="/weathers" element={<Weathers/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
