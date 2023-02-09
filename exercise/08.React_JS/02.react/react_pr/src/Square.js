import React from "react";

export const Square = ({ colorName }) => {
  return <section style={{ backgroundColor: colorName }}>{colorName}</section>;
};
