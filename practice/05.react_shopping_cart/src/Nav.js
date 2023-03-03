import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <React.Fragment>
      <nav className="nav">
        <h1 className="nav__title">
          <span
            style={{
              color: "#85c6f4",
            }}
          >
            O
          </span>
          lya
          <span
            style={{
              color: "#85c6f4",
            }}
          >
            S
          </span>
          hop
        </h1>
        <Link className="nav__product" to="/">
          Product
        </Link>
        <Link className="nav__cart" to="cart">
          <div>
            <svg
              className="nav__cart__svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M20 20a2 2 0 1 1-2-2 2 2 0 0 1 2 2ZM8 18a2 2 0 1 0 2 2 2 2 0 0 0-2-2ZM21.5 4H5.72l-.56-1a2 2 0 0 0-1.74-1H2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.92l4.28 7.49a2.19 2.19 0 0 0 .27.35l-1.86 3.7a.77.77 0 0 0 0 .71l.22.38A.76.76 0 0 0 7 17h12.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H8.62l1-2.09a2.74 2.74 0 0 0 .64.09h6.23A2.94 2.94 0 0 0 19 11.49l2.35-4.13A4.76 4.76 0 0 0 22 5v-.5a.5.5 0 0 0-.5-.5Z"></path>
            </svg>

            <div className="nav__counter">1</div>
          </div>
        </Link>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
