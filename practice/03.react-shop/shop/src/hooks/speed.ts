import { useEffect, useState } from "react";
import { User } from "./users";

export type WindSpeed = {
  windspeed: string;
};

export const useWindSpeed = (): WindSpeed | null => {
  const [speed, setWindSpeed] = useState<WindSpeed | null>(null);
  
  console.log(speed)

  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m").then(async (r) => {
      const response = await r.json();
      setWindSpeed(response.current_weather);
    });
  }, []);
  return speed;
 };
 