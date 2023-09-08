import React from "react";
import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div>
          <img src={logo} className="logo" alt="logo" />
        </div>
        <h1>Hello World</h1>
      </header>
    </div>
  );
}

export default App;
