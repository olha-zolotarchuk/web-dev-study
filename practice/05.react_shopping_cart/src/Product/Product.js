import React from "react";

const Product = ({ product }) => {
    //  console.log(product);
  return <li>{JSON.stringify(product)}</li>;
};

export default Product;
