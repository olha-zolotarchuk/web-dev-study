import React from "react";
import { useState, useEffect } from "react";

export const useCart = () => {
  const API_URL_CART = "http://localhost:3500/cart";
  const [cart, setCart] = useState([]);

  useEffect(
    () => {
      const fetchCart = async () => {
        try {
          const response = await fetch(API_URL_CART);
          const dataCart = await response.json();
          // console.log(dataCart);

          setCart(dataCart);
        } catch (err) {
          console.log(err);
        }
      };

      fetchCart();
    },
    []
  );

  
  return cart;
};
