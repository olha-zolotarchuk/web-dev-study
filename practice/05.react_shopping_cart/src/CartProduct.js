import React, { useCallback } from "react";
import { useProduct } from "./services/useProduct";
import { deleteProduct } from "./services/delete";

const CartProduct = ({ cartProduct }) => {
  const product = useProduct(cartProduct.productId);

  if (product === undefined) {
    return <p>Loading product data...</p>;
  }

  return (
    <div className="сart__product">
      <img
        src={product.thumbnail}
        alt={product.title}
        height="200px"
        width="200px"
      />
      <div class="product__details">
        <div className="сart__product__title">{product.title}</div>
        <div className="cart__product__brand">{product.brand}</div>
      </div>
      <div className="сart__product__amount">{cartProduct.amount}</div>
      <div className="сart__product__price">{product.price} &#36;</div>
      <button
        className="сart__product__btn__delete"
        type="button"
        onClick={() => {
          deleteProduct(cartProduct.id).then(() =>
            window.location.reload(false)
          );
        }}
      >
        Delete
      </button>

      {/* {JSON.stringify(cart)} */}
    </div>
  );
};

export default CartProduct;
