Chapter 5: Click Events
Chapter 6: useState Hook

import React from "react";
import { useState } from "react";
const Content = () => {
const [name, setName] = useState("Olha");

const [count, setCount] = useState(0);

const handleNameChange = () => {
const names = ["Bob", "Kevin", "Dave"];
const int = Math.floor(Math.random() \* 3);
setName(names[int]);
};

const handeleclick = () => {
setCount(count + 1);
setCount(count + 1);
console.log(count);
};

// const handeleclick2 = (name) => {
// console.log(`${name} was clicked`);
// };
const handeleclick2 = () => {
console.log(count);
};

// const handeleclick3 = (e) => {
// console.log(e.target.innerText);
// };

return (

<main>
<p onDoubleClick={handeleclick}>Hello {name}!</p>
<button onClick={handleNameChange}>Name Change</button>
{/_ <button onClick={() => handeleclick2("Olha")}>Click it</button> _/}
<button onClick={handeleclick}>Click it</button>
{/_ <button onClick={(e) => handeleclick3(e)}>Click it</button> _/}
<button onClick={handeleclick2}>Click it</button>
</main>
);
};

export default Content;



 Chapter 7: Lists & Keys

 import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  const handleCheck = (id) => {
    // console.log(`key: ${id}`);
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    // console.log(id);
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              ></input>
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      )}
    </main>
  );
};

export default Content;
