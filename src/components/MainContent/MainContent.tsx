import React from "react";
import cssStyles from "./MainContent.module.css";
import { VariantBtn } from "../index";

export const MainContent: React.FC = () => {
  return <main className={cssStyles.todoApp__taskArea}></main>;
};
