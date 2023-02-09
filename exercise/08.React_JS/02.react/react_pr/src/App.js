import React from "react";
import "./index";
import { Input } from "./Input";
import { Square } from "./Square";
import { useState } from "react";

export function App() {
  const [colorName, setColorName] = useState(undefined);

  return (
    <div>
      <Square colorName={colorName || "Empty Value"} />
      <Input onClick={setColorName} />
    </div>
  );
}
