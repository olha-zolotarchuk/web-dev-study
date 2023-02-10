import React from "react";


export const Square = ({ colorName, hexColor, whiteText }) => {
  return (
    <section
      style={{
        backgroundColor: colorName === "Empty Value" ? "#fff" : colorName,
        color: whiteText ? "#000" : "#FFF",
      }}
    >
      {colorName}
      {hexColor}
    </section>
  );
};
