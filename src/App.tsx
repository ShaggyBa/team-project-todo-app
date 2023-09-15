import React from "react";
import "./reset.css";
import "./UI-colors.css";
import cssStyles from "./App.module.css";
import { Header, MainContent, Sidebar, Footer } from "./components/index";

import { IList } from "./types/ILists.types";

const App: React.FC = () => {
  const lists: IList[] = [
    { id: 1, title: "Учеба", color: "green" },
    { id: 2, title: "Работа", color: "red" },
    { id: 3, title: "Способы самоубийства", color: "blue" },
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
