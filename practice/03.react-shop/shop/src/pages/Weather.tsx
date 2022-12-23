import React from "react";
import { useWeather, Weather } from "../hooks/weather";
import { User, useUsers } from "../hooks/users";


export const Weathers: React.VFC = ({}) => {
  const users: User[] | null = useUsers();
  const weathers: {[key: string]:Weather} | null = useWeather(users || []);
 

  if (users == null) {
    return null;
  }

  return (
    <div>
      Weather
       
        {users.map((user, i) => (
          <div key={i}>
            {user.id
             +" --- "+
            user.address.coordinates.lat
            +" --- "+
            user.address.coordinates.lng + " --- "}            
            {weathers && weathers[user.id]?.temperature}            
          </div>
        ))}
      </div>
  );
};
