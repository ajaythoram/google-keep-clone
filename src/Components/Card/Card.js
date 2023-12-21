import React, { useEffect, useState } from "react";
import "../Card/Card.css";
import { PushPin, Delete, Save } from "@mui/icons-material";

const Card = ({ title, note, bgcolor }) => {
  const [pin, setPin] = useState(false);
  const [color, setColor] = useState(bgcolor);
  const [updatetext, setUpdatetext] = useState(note);
  const [updateData, setUpdateData] = useState([]);

  useEffect(() => {
    const update = JSON.parse(localStorage.getItem("notes")) || [];
    setUpdateData(update);
  }, []);

  const styles = {
    backgroundColor: color,
  };

  function handlepin() {
    setPin((prevPin) => !prevPin);
  }

  const handelupdate = () => {
    const confirmed = window.confirm("Do you want to update?");
    if (confirmed) {
      const updatedData = updateData.map((item) => {
        if (item.title === title) {
          return {
            ...item,
            note: updatetext,
            color: color || item.color,
            pin: pin !== undefined ? pin : item.pin,
          };
        }
        return item;
      });

      setUpdateData(updatedData);
      localStorage.setItem("notes", JSON.stringify(updatedData));
    }
  };

  const handledelet = () => {
    const confirmed = window.confirm("Do you want to delete this note?");
    if (confirmed) {
      const updatedData = updateData.filter((item) => item.title !== title);

      setUpdateData(updatedData);
      localStorage.setItem("notes", JSON.stringify(updatedData));
    }
    window.location.reload();
  };

  return (
    <div id="card-div" style={styles}>
      <h4>{title}</h4>
      <p
        contentEditable={true}
        onInput={(e) => setUpdatetext(e.currentTarget.textContent)}
      >
        {note}
      </p>

      <div id="card-bottom">
      <PushPin onClick={handlepin} style={{ color: pin ? "black" : "grey" }} />
        <Delete onClick={handledelet} />
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <Save onClick={handelupdate} />
      </div>
    </div>
  );
};

export default Card;
