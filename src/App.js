import React from "react";
import Header from "../src/components/Header/Header";
import "./App.css";

function App() {
  return (
    // Use the BEM (Block Element Modifier) Naming convention
    <div className="app">
      <Header />
      {/* App Body */}
      {/* Left - Sidebar */}
      {/* Middle - Feed */}
      {/* Right - Widgets */}
    </div>
  );
}

export default App;
