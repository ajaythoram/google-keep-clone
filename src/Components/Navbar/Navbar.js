// Navbar.js
import React, { useState } from "react";
import "./Navbar.css";
import { Menu, Settings, Apps } from "@mui/icons-material";
import keep from "../images/keep.png";
import { Search, Refresh, Splitscreen } from "@mui/icons-material";

const Navbar = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    onSearchChange(searchTerm); 
  };

  return (

    <div>
    <div id="nav-bar">
      <div id="nav-left">
        <Menu className="icon" />
        <img src={keep} alt="logo" />
        <p>Keep</p>
        <input
          id="search"
          onChange={handleSearchChange}
          type="search"
          placeholder="   Search"
        />
      </div>
      <div id="nav-right">
        <Search className="icon" />
        <Refresh className="icon" />
        <Settings className="icon" />
        <Apps />
      </div>
    </div>
    <div id="nav-min">    
    <Menu className="icon" />
        <img src={keep} alt="logo" />
        <p>Keep</p>
        <Refresh className="icon" />
    </div>
    </div>
  );
};

export default Navbar;
