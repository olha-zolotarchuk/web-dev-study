import React from "react"
// import { useParams } from "react-router-dom";
import { useUsers } from "../hooks/users";

export const Users: React.VFC = ({}) => {
    const users: string[] | null = useUsers();
  
    return (
      <div>
     Users
    
        {users}


     {/* {users?.map((p) => <div> {p} <br/> <br/> </div>)} */}
  
      </div>
    );
  };
  
  