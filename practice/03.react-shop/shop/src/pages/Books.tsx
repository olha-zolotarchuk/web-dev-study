import { text } from "node:stream/consumers";
import React, { useRef, useState } from "react";
import { Book, useBooks,  } from "../hooks/books";

export const Books: React.VFC = ({}) => {

  const [searchQuery, setSearchQuery] = useState("mongo")
  const books = useBooks(searchQuery);
  const searchRef = useRef<any>( undefined);

  
  if (books === null) {
    return null;
  }

  return (
    <div>
      <form>
        <input
          ref={searchRef}
          className="search-input"
          type="search"
          placeholder="Enter a search query...."     
        />
        <button  type="button" onClick={() => { setSearchQuery(searchRef.current.value); return false;}} className="search-btn">Search</button>
      </form>
      {/* {searchQuery} */}
      {/* {books[0].title} */}
      {books.map((book, i) => (
        <React.Fragment>
            <div className="book-cart">
          <img src={book.image} />
          <p>{book.title}</p>
          <p>{book.subtitle}</p>
          <p>{book.price}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
