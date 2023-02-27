import React from "react";
import BtnAdd from "./BtnAdd";

const Product = ({ product, handleSubmit, newProduct, setNewProduct }) => {
  //  console.log(product);

  return (
    <div className="product">
      <div className="product__img">
        <img
          src={product.thumbnail}
          alt={product.title}
          height="200px"
          width="200px"
        />
      </div>
      <div>{product.title} </div>
      <div>
        {product.price}
        <span>$</span>
      </div>
      <div>{product.rating}</div>
      <BtnAdd productId={product.id} />
      {/* {JSON.stringify(product)} */}
    </div>
  );
};

export default Product;
