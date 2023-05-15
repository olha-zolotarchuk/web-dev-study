import { MdDeleteForever } from "react-icons/md";
import React from "react";

const Note = ({ id, text, date, handleDeleteNote }) => {
  const deleteNote = () => {
    handleDeleteNote(id);
  };

  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        {/* <button className="delete-icon"  onClick={() => handleDeleteNote()}> */}
        <MdDeleteForever
          onClick={() => deleteNote(id)}
          className="delete-icon"
          size="1.3rem"
        />
        {/* </button> */}
      </div>
    </div>
  );
};

export default Note;
