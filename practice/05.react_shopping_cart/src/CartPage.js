import React from "react";
import CartProduct from "./CartProduct";

const CartPage = ({ cart }) => {
  // console.log(cart);
  return (
    <React.Fragment>
      <div> YOUR BAG</div>
      <div>
        {cart.map((cartProduct, i) => (
          <CartProduct key={i} cartProduct={cartProduct} />
        ))}
        <p>Total</p>
      </div>
    </React.Fragment>
  );
};
export default CartPage;
