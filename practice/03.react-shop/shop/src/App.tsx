import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Categories } from './pages/Categories';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path='/product/:productId' element={<Product />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
