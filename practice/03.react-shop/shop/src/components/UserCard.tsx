import React from "react";
import { User } from "../hooks/users";
import {
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";

type UserProps = {
  user: User;
};

export const UserCard: React.FC<UserProps> = ({ user }) => {
  if (user == null) return null;

  return (
    <div>
<div><faStar/></div>
      <img className="user-image" src={user.image} />
      <div>
        {user.firstName}
        {user.lastName}
      </div>
      <div>
        <div>{user.gender}</div>
        {/* <div>{user.address}</div> */}
      </div>
    </div>
  );
};
