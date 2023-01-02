import { type } from "os";
import { useEffect, useState } from "react";

export type Book = {
    title: string;
    subtitle: string;
    image: string;
    price:string;
}

export const useBooks = (): Book[] | null => {

    const[books, setBooks] = useState
     <Book[] | null>(null);

console.log(books)

    useEffect (() => {
        fetch('https://api.itbook.store/1.0/search/css').
        then(async(r)  => {
            const response = await r.json(); 
            setBooks(response.books);

        });

    }, [] );

    return (books)
};