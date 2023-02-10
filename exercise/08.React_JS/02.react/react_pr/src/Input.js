import React from "react";
import colorNames from "colornames"

// import React, { useRef } from "react";

export const Input = ({ setColorName,setHexColor, setWhiteText, whiteText }) => {
    // const refInput = useRef();

    return (
      <React.Fragment>
        <input
          className="input"
          type="text"
          placeholder="Add color name"
          onChange={(e) => {
            setColorName(e.target.value === "" ? undefined : e.target.value);
            setHexColor(colorNames(e.target.value));
          }}
          //  <input ref={refInput} type="text" placeholder="Add color name" />
        />
        {/* <button
        onClick={() => {
          onClick(refInput.current.value);
        }}>
        Send
      </button> */}
        <button onClick={() => setWhiteText(!whiteText)}>TOGGLE</button>
      </React.Fragment>
    );
};

