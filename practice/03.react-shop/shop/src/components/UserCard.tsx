import React from "react";
import { User } from "../hooks/users";
import {
  faMars, faVenus 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type UserProps = {
  user: User;
};

export const UserCard: React.FC<UserProps> = ({ user }) => {
  if (user == null) return null;


  const genderFragment = user.gender === "male" ?  <FontAwesomeIcon icon={faMars} size="2x" /> : <FontAwesomeIcon icon={faVenus} size="2x" />


  return (
    <div>
      <img className="user-image" src={user.image} />
      <div>
        {user.firstName}
        {user.lastName}
      </div>
      <div>
        {genderFragment}   
      </div>
      <div>
        {user.address}
      </div>
    </div>
  );
};
