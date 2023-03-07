import React, { useCallback } from "react";

const BtnAdd = ({ productId }) => {
  const addProduct = async (productId) => {
    const response = await fetch("http://localhost:3600/cart/" + productId);

    if (response.status === 404) {
      // @todo await fetch put ....
      await fetch("http://localhost:3600/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: productId,
          amount: 1,
        }),
      });
    } else if (response.status === 200) {
      const record = await response.json();
      console.log(record.amount);
      // todo
      fetch(`http://localhost:3600/cart/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: record.amount + 1,
        }),
      });
    }

    console.log(response);
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      addProduct(productId);
    },
    [productId]
  );

  return (
    <div>
      <button className="btn__add" type="button" onClick={handleSubmit}>
        Add to Cart
      </button>
    </div>
  );
};

export default BtnAdd;
