
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "../Display/Display.css";

const Display = ({ search }) => {
  let [data, setData] = useState([]);

  useEffect(() => {
    const existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setData(existingNotes);
  }, []);

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.note.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div id="display">
      {filteredData.map((item) => (
        <Card title={item.title} note={item.note} bgcolor={item.color} />
      ))}
    </div>
  );
};

export default Display;
