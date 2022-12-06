import React from "react";
import { useParams } from "react-router-dom";
import { useCategory } from "../hooks/category";
import { ProductCard} from "../components/ProductCard";

export const Category: React.VFC = ({}) => {
  const { categoryId } = useParams();
  const products = useCategory(categoryId);
  console.log(products);

  return (<div> Category {categoryId}
  
  <div className="category"> {products?.map((p) => <ProductCard key={p.id} product={p}/>)} </div>
  
  </div>
  )
};
