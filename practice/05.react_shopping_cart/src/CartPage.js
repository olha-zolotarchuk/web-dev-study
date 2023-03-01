import React, { useCallback } from "react";
import CartProduct from "./CartProduct";
import { useCart } from "./services/useCart";
import { deleteProduct } from "./services/delete";

const CartPage = () => {
  const cart = useCart();

  const removeAllHandler = useCallback(async () => {
    for (const cartProduct of cart) {
      await deleteProduct(cartProduct.id);
    }
    window.location.reload(false);
  }, [cart]);

  return (
    <React.Fragment>
      <div className="cart__header">
        <h2> YOUR BAG</h2>
        <button
          className="cart__clear__btn"
          type="button"
          onClick={removeAllHandler}
        >
          CLEAR CART
        </button>
      </div>
      <div className="cart__items">
        {cart.map((cartProduct, i) => (
          <CartProduct key={i} cartProduct={cartProduct} />
        ))}
        {/* <div className="cart__total">Total</div>
        <div className="cart__empty__message">Is currently empty...</div> */}
      </div>
    </React.Fragment>
  );
};
export default CartPage;
