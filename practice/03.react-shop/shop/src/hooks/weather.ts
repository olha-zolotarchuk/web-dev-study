import { useEffect, useState } from "react";

export type Weather = {
time:string;
temperature: string;
}

export const useWeather = (): Weather | null => {
    const [weather, setWeather] = useState<Weather | null>(null);
    
    console.log(weather)

    useEffect(() => {
      fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true").then(async (r) => {
        const response = await r.json();
        setWeather(response.current_weather);
      });
    }, []);
return weather;
   };
 
