import React from "react";
// import Product from "./Product";

const BtnAdd = ({ setCart }) => {
  return (
    <div>
      <button className="btn__add" type="button" onClick={setCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default BtnAdd;
