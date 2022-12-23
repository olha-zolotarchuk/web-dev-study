import { useEffect, useState } from "react";
import { User } from "./users";

export type Weather = {
  time: string;
  temperature: string;
};

export const useWeather = (
  users: User[]
): { [key: string]: Weather } | null => {
  const [weathers, setWeathers] = useState<{ [key: string]: Weather } | null>(
    null
  );

  useEffect(() => {
    if (users.length == 0) return;

    const result = users.map(async (user) => {
      const r = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${user.address.coordinates.lat}&longitude=${user.address.coordinates.lng}&current_weather=true`
      );
      const weatherR = await r.json();
      return { userId: user.id, weather: weatherR.current_weather };
    });
    Promise.allSettled(result).then((res) => {
      const final = res.reduce((map: any, obj: any) => {
        map[obj.value.userId] = obj.value.weather;
        return map;
      }, {}) as any;

      setWeathers(final);
    });
  }, [users]);
  return weathers;
};
