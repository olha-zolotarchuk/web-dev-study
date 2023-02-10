import React from "react";
import "./index";
import { Input } from "./Input";
import { Square } from "./Square";
import { useState } from "react";

export function App() {
  const [colorName, setColorName] = useState(undefined);
  const [hexColor, setHexColor] = useState("");
  const [whiteText, setWhiteText] = useState("true");

  return (
    <div>
      <Square
        colorName={colorName || "Empty Value"}
        hexColor={hexColor}
        whiteText={whiteText}
      />

      <Input
        setColorName={setColorName}
        setHexColor={setHexColor}
        whiteText={whiteText}
        setWhiteText={setWhiteText}
      />
      {/* <Input onClick={setColorName} /> */}
    </div>
  );
}
