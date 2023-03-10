import React from "react";
import UseTotalCart from "./UseTotalCart";

export const CartTotal = () => {
  return (
    <React.Fragment>
      <div className="cartTotal">
        <h2> Summary </h2>
        <p>Coupons can be added during checkout </p>
        <div className="cart__total">Total</div>
        <UseTotalCart />
      </div>
    </React.Fragment>
  );
};
