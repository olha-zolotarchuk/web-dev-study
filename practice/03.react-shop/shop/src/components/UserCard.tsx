import React from "react";
import { User } from "../hooks/users";

type UserProps = {
  user: User;
};

export const UserCard: React.FC<UserProps> = ({ user }) => {
  if (user == null) return null;

  return (
    <div>
      <div className="user-table"> Users Card </div>

      <img className="user-image" src={user.image} />
      <div>
        {user.firstName}
        {user.lastName}
      </div>
      <div>
        <div>{user.gender}</div>
        <div>{user.lat}</div>
      </div>
    </div>
  );
};
