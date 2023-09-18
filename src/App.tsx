import React from "react";
import "./reset.css";
import "./UI-colors.css";
import cssStyles from "./App.module.css";
import { Header, MainContent, Sidebar, Footer } from "./components/index";
import {ListItemsData} from "./data/ListItemsData";

import { IList } from "./types/ILists.types";

const App: React.FC = () => {

  return (
    <div className={cssStyles.todoApp__wrapper}>
      <Header />
      <Sidebar lists={ListItemsData} />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
