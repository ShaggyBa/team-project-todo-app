import React from "react";
import "./reset.css";
import "./UI-styles.css";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <header className="app-header"></header>
      <div className="app-main">
        <Sidebar lists={lists} />
        {/* Main */}
        <div className="app-content"></div>
      </div>
    </div>
  );
}

export default App;
