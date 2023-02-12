import React, { useEffect } from "react";
import Header from "./Header";
import SearchItem from "./SearchItem";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist")) || []
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  // const [a, setA] = useState("");
  // const [c, setC] = useState("");
  // const [b, setB] = useState("");

  useEffect(() => {
    localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [items]);

  // useEffect(() => {
  //   console.log("rerender");
  //   console.log(a, b, c);
  // });

  // useEffect(() => {
  //   console.log("c");
  //   console.log(a, b, c);
  // }, [c]);

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleCheck = (id) => {
    // console.log(`key: ${id}`);
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    // console.log(id);
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submitted");
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      {/* <Header /> */}
      {/* <Content /> */}
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />


{/* 
      <button
        onClick={() => {
          setA("1");
        }}
      >
        A
      </button>
      <button
        onClick={() => {
          setB("1");
        }}
      >
        B
      </button>
      <button
        onClick={() => {
          setC(Math.random());
        }}
      >
        C
      </button> */}


      
      {/* <p className="App-intro">Hello {handleNameChange()}!</p> */}
      {/* <p> {name}</p> */}
    </div>
  );
}

export default App;
