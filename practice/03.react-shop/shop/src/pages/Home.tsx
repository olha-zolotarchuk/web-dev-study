import React, { useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { useProduct } from "../hooks/products";
import { CategoryTable } from "../components/CategoryTable";
import { useCategories } from "../hooks/categories";

export const Home: React.VFC = ({}) => {
  const [productId, setProductId] = useState<number>(1);
  const p1 = useProduct(productId);
  const p2 = useProduct(5);
  const p3 = useProduct(37);
  const categories: string[] | null = useCategories();

  // console.log(productId)

  return (
    <div>
      Home
      <ProductCard product={p1} />
      <ProductCard product={p2} />
      <ProductCard product={p3} />
      <button
        onClick={() => {
          setProductId(productId + 1);
        }}
      >
        next
      </button>
      <CategoryTable categories={categories} />
    </div>
  );
};
