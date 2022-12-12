import React from "react";
import { useParams } from "react-router-dom";
import { useCategory } from "../hooks/category";
import { ProductCard} from "../components/ProductCard";
// import { Rating} from "../components/Rating";

export const Category: React.VFC = ({}) => {
  const { categoryId } = useParams();
  const products = useCategory(categoryId);
  // console.log(products);

  return (<div> Category {categoryId}
  {/* <Rating rating={3}/> */}
  
  <div className="category"> {products?.map((p) => <ProductCard key={p.id} product={p}/>)} </div>
  
  </div>
  )
};
