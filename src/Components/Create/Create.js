import React, { useState } from "react";
import { ColorLens } from "@mui/icons-material";
import "../Create/Create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [showContent, setShowContent] = useState(false);
 const [color,setColor] = useState("white");
 
  const handleCreateNote = () => {
    const newNote = {
      title: title,
      note: note,
      pin:false,
      color:color,
    };

    const existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = [...existingNotes, newNote];

    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    setTitle("");
    setNote("");
    setShowContent(false);
    window.location.reload();
  };

  return (
    <div id="create">
      <div id="title">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          onClick={() => setShowContent(true)}
        />
      </div>

      {showContent && (
        <div id="content">
          <input
            type="text"
            placeholder="Take a note..."
            onChange={(e) => setNote(e.target.value)}
            value={note}
          />
          <div>
            
            
            <span onClick={handleCreateNote}>Create</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Create;
