import React from "react";
import { useState } from "react";

export const counter = () => {
  
    const [counter, setCounter] = useState(1);

      const handleClick1 = () => {
        setCounter(counter + 1);
      }
    
   const handleClick2 = () => {
     setCounter(counter - 1);
   };
    
    return (
        <React.Fragment>
            <div className="counter">Counter</div>
            <button className="btnMinus" onClick={handleClick2}>-</button>
            {counter}
            <button className="btnPlus" onClick={handleClick1}>+</button>
        </React.Fragment>
    )
};
