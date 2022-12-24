import { useEffect, useState } from "react";
import { User, useUsers } from "./users";

export type WindSpeed = {
  windspeed: string;
};

export const useWindSpeed = (user?:User): WindSpeed | null => {
  
  const [speed, setWindSpeed] = useState<WindSpeed | null>(null);

  // const windspeed: {[key: string]:WindSpeed} | null = useWindSpeed(users || []);

  // const users: User[] | null = useUsers();
  
  // console.log(speed)

  
 
  
  useEffect(() => {
    if (user == undefined) {
      return
    }

    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${user.address.coordinates.lat}&longitude=${user.address.coordinates.lng}&current_weather=true`).then(async (r) => {
      const response = await r.json();
      setWindSpeed(response.current_weather);
    });
    
  }, [user]);
  
  return speed;
 };
 