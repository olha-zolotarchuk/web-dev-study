import React from "react";
import { useParams } from "react-router-dom";
import { User, useUsers } from "../hooks/users";
import { UserCard } from "../components/UserCard";
import { useWeather, Weather } from "../hooks/weather";

export const Users: React.VFC = ({}) => {
  const users: User[] | null = useUsers();
  const weathers: { [key: string]: Weather } | null = useWeather(users || []);

  if(weathers===null){
    return null
  }
  return (
    <div>
      <h1> Users </h1> 
      <div>
        {users?.map((user, i) => (
          <UserCard
            key={i}
            user={user}
            temperature={weathers[user.id]?.temperature}
          />
        ))}
      </div>
    </div>
  );
};
