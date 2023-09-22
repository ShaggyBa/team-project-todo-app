import React from "react";
import "./reset.css";
import "./UI-colors.css";
import cssStyles from "./App.module.css";
import { Header, ListView, Sidebar, Footer } from "./components/index";
import {ListItemsData} from "./data/ListItemsData";

const App: React.FC = () => {

  return (
    <div className={cssStyles.todoApp__wrapper}>
      <Header />
      <Sidebar lists={ListItemsData} />
      <ListView list={ListItemsData[0]} />
      <Footer />
    </div>
  );
};

export default App;
