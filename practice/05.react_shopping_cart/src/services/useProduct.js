import React from "react";
import { useState, useEffect } from "react";

export const useProduct = (id) => {
  const API_URL = "https://dummyjson.com/products/";
  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    const fetchId = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();
        // console.log(data);
        // console.log(data.id);
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchId();
  }, [id]);
  return product;
};
