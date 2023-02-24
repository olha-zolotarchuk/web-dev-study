import React from "react";
import Product from "./Product";

const ProductPage = ({ products }) => {
  // console.log(products);
  return (
    <React.Fragment>
      <div className="products__page">
        {products.map((product, i) => (
            <Product key={i} product={product} />
          ))}
      </div>
    </React.Fragment>
  );
};

export default ProductPage;
