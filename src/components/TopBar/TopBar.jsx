import React from "react";
import UserButton from "../UserButton/UserButton";
import "./TopBar.css"

const TopBar = () => {
  return (
    <div className="topBar">
      {/* SEARCH */}

      <div className="search">
        <img src="/general/search.svg" alt="" />
        <input type="text" placeholder="Pesquisar" />
      </div>
      {/* USER */}
      <UserButton />
    </div>
  );
};

export default TopBar;
