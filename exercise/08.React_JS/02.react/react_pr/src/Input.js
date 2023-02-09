import React, { useRef } from "react";

export const Input = ({ onClick }) => {
  const refInput = useRef();
  return (
    <React.Fragment>
      <input ref={refInput} type="text" placeholder="Add color name" />
      <button
        onClick={() => {
          onClick(refInput.current.value);
        }}
      >
        Send
      </button>
    </React.Fragment>
  );
};
