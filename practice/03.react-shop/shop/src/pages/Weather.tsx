import React from "react";
import { useWeather, Weather } from "../hooks/weather";
import { User, useUsers } from "../hooks/users";
import { UserCard } from "../components/UserCard";

export const Weathers: React.VFC = ({}) => {
  const weathers: Weather | null = useWeather();
  const users: User[] | null = useUsers();

 if (users==null){
  return null
 }

  return (
    <div>
      Weather
      <div>
    
        {weathers?.time}
        {weathers?.temperature}

        {/* <UserCard User = {users} /> */}
        {users[4]?.address.coordinates.lng}

      </div>
    </div>
  );
};


//         {users?.address.coordinates.lat}
//         {user.address.coordinates.lng}

