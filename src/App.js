import React from "react";
import Sidebar from "../src/components/Sidebar/Sidebar";
import Header from "../src/components/Header/Header";
import Login from "../src/components/Login/Login";
import { selectUser } from "./features/userSlice";
import Feed from "./components/Feed/Feed";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const user = useSelector(selectUser);
  return (
    // Use the BEM (Block Element Modifier) Naming convention
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/* Right - Widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
