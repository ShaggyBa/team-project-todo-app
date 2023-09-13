import React from "react";
import "./reset.css";
import "./UI-colors.css";
import { Sidebar } from "./components/index";

function App() {
  const lists = [
    { id: 1, title: "Учеба" },
    { id: 2, title: "Фронтенд" },
    { id: 3, title: "Способы самоубийства" },
  ];

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
