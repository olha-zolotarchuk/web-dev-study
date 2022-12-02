import React from "react";

type CategoryTableProps = {
  categories: string[] | null;
};

export const CategoryTable: React.FC<CategoryTableProps> = ({ categories }) => {
  if (categories === null) return <p>Empty categories</p>;

  return (
    <table className="category-table">
      <thead>
        <tr>
          <th>Сategories</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((r, i) => (
          <tr className="">
            <td>
              <a href={"/category/"+r}> {r} </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
