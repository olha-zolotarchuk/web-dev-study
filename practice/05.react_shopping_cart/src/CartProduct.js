import React, { useCallback, useState } from "react";
import { useProduct } from "./services/useProduct";
import { deleteProduct } from "./services/delete";

const CartProduct = ({ cartProduct, a }) => {
  const product = useProduct(cartProduct.id);

  const [counter, setCounter] = useState(cartProduct.amount);

  if (product === undefined) {
    return <p>Loading product data...</p>;
  }

  const handleClick1 = () => {
    setCounter(counter + 1);
    console.log(counter);
    a(counter + 1);
    a(counter -10);
    // console.log(setCounter);
  };

  const handleClick2 = () => {
    setCounter(counter - 1);
    console.log(counter);
    if (counter - 1 === 0) {
      return deleteProduct(cartProduct.id).then(() =>
        window.location.reload(false)
      );
    }
  };

  const totalPrice = counter * product.price;

  return (
    <div className="сart__product">
      <div className="сart__product__img">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="сart__product__details">
        <div className="сart__product__title">{product.title}</div>
        <div className="cart__product__brand">{product.brand}</div>
      </div>
      <div className="cart__product__counter">
        <button className="btnCounteUseTotalCartr" onClick={handleClick2}>
          -
        </button>
        <div className="сart__product__amount">{counter}</div>
        {/* <div className="сart__product__amount">{cartProduct.amount}</div> */}

        <button className="btnCounter" onClick={handleClick1}>
          +
        </button>
      </div>
      {/* <div className="сart__product__price">{product.price}&#36;</div> */}
      <div>
        <div className="сart__product__priceTotal">{totalPrice}&#36;</div>
        <div className="сart__product__price">
          Unit price {product.price}&#36;
        </div>
      </div>
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
