import { useEffect, useState } from "react";

export const useCategories = (): string[] | null=> {
  const [categories, setCategories] = useState<string[] | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories/").then(async (r) => {
      setCategories(await r.json());
    });
  }, []);
  return categories;
};

