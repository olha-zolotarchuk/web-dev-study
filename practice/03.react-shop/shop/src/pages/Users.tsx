import React from "react";
import { useParams } from "react-router-dom";
import { User, useUsers } from "../hooks/users";
import { UserCard } from "../components/UserCard";

export const Users: React.VFC = ({}) => {
  const users: User[] | null = useUsers();

  return (
    <div>
      Users
      <div className="users">

        {users?.map((user, i) => (
          <UserCard key={i} user={user} />
        ))}
      </div>
    </div>
  );
};
