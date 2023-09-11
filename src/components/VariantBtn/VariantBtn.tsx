import React from "react";

import s from "./VariantBtn.module.css";

import PlusCircle from "../../assets/icons/plus-circle.svg";
import PlusSquare from "../../assets/icons/plus-square.svg";
import Trash from "../../assets/icons/trash.svg";

import { IButton } from "../../types/IButton.types";

export const VariantBtn: React.FC<IButton> = ({ variant }) => {
  let buttonText;
  let icon;

  switch (variant) {
    case "add-list":
      icon = PlusSquare;
      buttonText = "Add List";
      break;
    case "add-task":
      icon = PlusCircle;
      buttonText = "Add Task";
      break;
    case "delete-list":
      icon = Trash;
      buttonText = "Delete List";
      break;
    default:
      icon = PlusCircle;
      buttonText = "Default-btn";
      break;
  }

  return (
    <button className={`${s.variantBtn}`}>
      <img src={icon} alt={buttonText} />
      <span>{buttonText}</span>
    </button>
  );
};
