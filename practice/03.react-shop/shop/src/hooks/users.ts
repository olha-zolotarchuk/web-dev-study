import { useEffect, useState } from "react";
// import { Users } from "../pages/Users";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  gender: string;
  // address: string;
};

// export type Address={
 
// }


// export type Coordinates = {
//   lat: string;
//   lng: string;
// }


export const useUsers = (): User[] | null => {
  const [users, setUsers] = useState<User[] | null>(null);
  
  useEffect(() => {
    fetch("https://dummyjson.com/users").then(async (r) => {
      const response = await r.json();
      setUsers(response.users);
    });
  }, []);
  return users;
 };
 