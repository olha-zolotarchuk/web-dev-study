import React from "react";
import { useCategories } from "../hooks/categories";
import { CategoryTable } from "../components/CategoryTable";

export const Categories: React.VFC = ({}) => {
  const categories: string[] | null = useCategories();

  return (
    <div>
      Categories
      <CategoryTable categories={categories} />  

    </div>
  );
};
