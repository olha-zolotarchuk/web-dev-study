import React, { useCallback } from "react";
import { useProduct } from "./services/useProduct";
import { deleteProduct } from "./services/delete";

const CartProduct = ({ cartProduct }) => {
  const product = useProduct(cartProduct.productId);

  if (product === undefined) {
    return <p>Loading product data...</p>;
  }

  return (
    <div className="CartProduct">
      <img
        src={product.thumbnail}
        alt={product.title}
        height="200px"
        width="200px"
      />
      <div>{product.title}</div>
      <div>{cartProduct.amount}</div>
      <div>{product.price}</div>
      <button
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
