import React from "react";
import { User } from "../hooks/users";
import { faMars, faVenus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type UserProps = {
  user: User;
};

export const UserCard: React.FC<UserProps> = ({ user }) => {
  if (user == null) return null;

  const genderFragment =
    user.gender === "male" ? (
      <FontAwesomeIcon icon={faMars} size="2x" />
    ) : (
      <FontAwesomeIcon icon={faVenus} size="2x" />
    );


  return (
    <div className="user-card">
      <img className="user-image" src={user.image} />

      <div className="user-name">
      {`${user.firstName} ${user.lastName}`}
        <div className="user-gender">
          {genderFragment}</div>
      </div>

      <div>
        <div className="">{user.age}</div>
        <div className="user-birthDate">{user.birthDate}</div>
      </div>

      <div>
        <a
          className="user-coordinates"
          href={
            `http://maps.google.com/maps?q=${user.address.coordinates.lat},${user.address.coordinates.lng}`}
        >
          {user.address.city}<br></br>
          {user.address.address}<br></br>
        </a>
        <a href={`mailto:${user.email}?subject=Hello`}>{user.email}
        </a>
      </div>
      {user.address.coordinates.lat}
        {user.address.coordinates.lng}
    </div>
  );
};


