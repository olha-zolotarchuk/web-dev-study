import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Olha");

  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handeleclick = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  };

  // const handeleclick2 = (name) => {
  //   console.log(`${name} was clicked`);
  // };
  const handeleclick2 = () => {
    console.log(count);
  };

  // const handeleclick3 = (e) => {
  //   console.log(e.target.innerText);
  // };

  return (
    <main>
      <p onDoubleClick={handeleclick}>Hello {name}!</p>
      <button onClick={handleNameChange}>Name Change</button>
      {/* <button onClick={() => handeleclick2("Olha")}>Click it</button> */}
      <button onClick={handeleclick}>Click it</button>
      {/* <button onClick={(e) => handeleclick3(e)}>Click it</button> */}
      <button onClick={handeleclick2}>Click it</button>
    </main>
  );
};

export default Content;
