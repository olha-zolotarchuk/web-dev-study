import React from "react";
import { useState, useEffect } from "react";

export const useProducts = () => {
  const API_URL = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        // console.log(data)
        // console.log(data.products);
        setProducts(data.products);
      } catch (err) {
        console.log(err);
      }
    };

    fetchItems();
  }, []);
  return products;
};
