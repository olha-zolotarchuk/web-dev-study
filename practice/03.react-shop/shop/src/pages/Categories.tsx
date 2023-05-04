import React from "react";
import { useCategories } from "../hooks/categories";
import { CategoryTable } from "../components/CategoryTable";

export const Categories: React.VFC = ({}) => {
  const categories: string[] | null = useCategories();

  return (
    <div>
      <h1> Categories</h1>
      <CategoryTable categories={categories} />
    </div>
  );
};
