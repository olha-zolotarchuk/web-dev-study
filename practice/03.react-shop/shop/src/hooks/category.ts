import { useEffect, useState } from "react";
import { Product } from "./products";



export const useCategory= (categoryId?: string): Product[] | null => {
  const [products, setProducts] = useState <Product[] | null> (null)

  if (categoryId === undefined) return null;


  useEffect(() => {
      fetch('https://dummyjson.com/products/category/' + categoryId).then(async(r) => {
          const response = await r.json()
          setProducts(response.products)
      })  
  }, [categoryId])

  return products
  
}