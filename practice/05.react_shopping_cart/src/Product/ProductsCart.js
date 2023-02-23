import React from "react";
import Product from "./Product";

const ProductCart = ({ products }) => {
  console.log(products);
  return (
    <React.Fragment>
      <div>
        {products &&
          products.map((product, i) => (
            <Product key={i} product={product} />
              // { product.id }
            //   {product.title}
          ))}
      </div>
    </React.Fragment>
  );
};

export default ProductCart;
