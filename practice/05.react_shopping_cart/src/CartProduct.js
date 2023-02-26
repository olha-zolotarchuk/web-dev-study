import React from "react";
import { useProduct } from "./services/useProduct";

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
      {/* {JSON.stringify(cart)} */}
    </div>
  );
};

export default CartProduct;
