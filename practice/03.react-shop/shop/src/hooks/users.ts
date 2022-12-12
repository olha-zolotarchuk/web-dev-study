import { useEffect, useState } from "react";

type UserProps = {
    user: Users | null;
  };


export type Users = {
    firstName: string,
    lastName:string,
}


  
export const useUsers = (): string[] | null=> {
    const [users, setUsers] = useState<string[] | null>(null);

  console.log(users)

    useEffect(() => {
      fetch("https://dummyjson.com/users").then(async (r) => {
        const response = await r.json()
        setUsers(response.users)
    })  
    }, []);
    return users;
  };