import Header from "../src/components/Header/Header";
import React from "react";
import Sidebar from "../src/components/Sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    // Use the BEM (Block Element Modifier) Naming convention
    <div className="app">
      <Header />
      {/* App Body */}
      <div className="app__body">
        <Sidebar />
        {/* Middle - Feed */}
        {/* Right - Widgets */}
      </div>
    </div>
  );
}

export default App;
