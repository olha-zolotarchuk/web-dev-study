import { useCart } from "./services/useCart";
import { useProducts } from "./services/useProducts";
import { useState, useEffect } from "react";

const TotalCart = () => {
  const products = useProducts();
  const cart = useCart();

  const [totalPrice, setTotalPrice] = useState(0);
  // console.log(products);

  useEffect(() => {
    if (
      products == undefined ||
      products.length == 0 ||
      cart == undefined ||
      cart.length == 0
    ) {
      return;
    }

    // var total = 0;
    // cart.forEach(
    //   (cartItem) =>
    //     (total +=
    //       products.find((p) => p.id === cartItem.id).price * cartItem.amount)
    // );

    setTotalPrice(
      cart.reduce(
        (total, cartItem) =>
          products.find((p) => p.id === cartItem.id).price * cartItem.amount +
          total,
        0
      )
    );
  }, [products, cart]);

  return <div className="UseTotalCart">{totalPrice}</div>;
};

export default TotalCart;
