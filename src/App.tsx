import React from "react";
import "./reset.css";
import "./UI-colors.css";
import cssStyles from "./App.module.css";
import { Header, MainContent, Sidebar, Footer } from "./components/index";

const App: React.FC = () => {
  const lists = [
    { id: 1, title: "Учеба" },
    { id: 2, title: "Работа" },
    { id: 3, title: "Способы самоубийства" },
  ];

  return (
    <div className={cssStyles.todoApp__wrapper}>
      <Header />
      <Sidebar lists={lists} />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
