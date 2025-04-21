import React from "react";
import LeftBar from "./components/leftBar/leftBar";
import TopBar from "./components/topBar/topBar";
import Gallery from "./components/gallery/gallery";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <LeftBar />
      <div className="content">
        <TopBar />
        <Gallery />
      </div>
    </div>
  );
};

export default App;
