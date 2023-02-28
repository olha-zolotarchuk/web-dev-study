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
      <div> YOUR BAG</div>
      <button className="btn__cart" type="button" onClick={removeAllHandler}>
        CLEAR CART
      </button>

      <div>
        {cart.map((cartProduct, i) => (
          <CartProduct key={i} cartProduct={cartProduct} />
        ))}
        <p>Total</p>
        {/* 
        <p>is currently empty</p> */}
      </div>
    </React.Fragment>
  );
};
export default CartPage;
