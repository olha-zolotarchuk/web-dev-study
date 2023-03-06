import React, { useCallback, useState } from "react";

const BtnAdd = ({ productId }) => {
  // if (productId === null) {
  //   return addProduct();
  // }
  const [count, seCount] = useState(1);

  const addProduct = (productId) => {
    fetch("http://localhost:3600/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: productId,
        amount: 1,
      }),
    });
  };

  const updateProduct = (id) => {
    fetch(`http://localhost:3600/cart/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: seCount(Number(count) + 1),
      }),
    });
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (productId === undefined) {
        return addProduct(productId);
      } else {
        updateProduct(productId);
      }
    },
    [productId]
  );
  // const handleUpdate = useCallback(
  //   (e) => {
  //     e.preventDefault();
  //     updateProduct(productId);
  //   },
  //   [productId]
  // );

  return (
    <div>
      <button className="btn__add" type="button" onClick={handleSubmit}>
        Add to Cart
      </button>
    </div>
  );
};

export default BtnAdd;

// {
//   BtnAdd ? { handleSubmit } : { handleUpdate };
// }
