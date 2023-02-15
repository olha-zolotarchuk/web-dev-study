// import { useEffect, useState } from "react";



// export const useHeader = (): Headers | null => {
//   const [headers, setHeader] = useState<Headers | null>(null);

//   console.log(headers)

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//   .then( res => {
//     const headers = res.headers.raw())
//     return new Promise((resolve, reject) => {
//       res.json().then( json => resolve({headers, json}) )
//     })
//   })
//   .then( ({headers, json}) => doSomething(headers, json) )
//   }, [searchQuery]);

//   return headers;
// };
