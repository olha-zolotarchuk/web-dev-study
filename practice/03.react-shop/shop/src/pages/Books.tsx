import React from "react";
import { Book, useBooks } from "../hooks/books";

export const Books: React.VFC = ({}) => {
  const books = useBooks();

  if (books === null) {
    return null;
  }

  return (
    <div>
      {/* {books[0].title} */}
      {books.map((book, i) => (
        <p>{book.title}</p>
      ))}
    </div>
  );
};
