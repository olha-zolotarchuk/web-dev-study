import React from "react";

type CategoryTableProps = {
  categories: string[] | null;
};

export const CategoryTable: React.FC<CategoryTableProps> = ({ categories }) => {

  return (
    <div>
      <a href={"/categories/"}> xxx</a>
      <ul>
        {/* <li>{category}</li> */}
      </ul>
    </div>
  );
};
