import { useWindSpeed , WindSpeed } from "../hooks/speed";
import React from "react";

export const Speed: React.VFC = ({}) => {
    const speed: WindSpeed | null = useWindSpeed(undefined);

    return (
        <div>
          WindSpeed 
          <div>
            {speed?.windspeed}
        
          </div>
        </div>
      );
    };
    