import React from "react";
import Cart from "./Cart";
import Product from "./Product/Product";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <React.Fragment>
      <nav className="Nav">
        <h1>OlyaShop</h1>
        <Link to="/">Product</Link>
        <Link to="cart">Cart</Link>

        {/* <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path
              className="basket__svg"
              d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z"
              fill="white"
            ></path>
          </svg>
        </button> */}
      </nav>
    </React.Fragment>
  );
};

export default Nav;
