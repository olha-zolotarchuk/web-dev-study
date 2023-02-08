import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    const inputRef = useRef();
    
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        //   let's make the input a controlled input or controlled component
        value={newItem}
        //   and here we'll just put in the state so it's new item but if we just left it at that we wouldn't even be able to change the state at all or change the new item so we also need an on change  and here we're going to actually pass in the event object and after we pass in the event object we need the equals to create an arrow we're going to call set new item
        onChange={(e) => setNewItem(e.target.value)}
      ></input>
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
