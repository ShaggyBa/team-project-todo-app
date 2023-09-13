import React from "react";

import s from "./VariantBtn.module.css";

import { ReactComponent as PlusIcon } from "../../assets/icons/plus_icon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete_icon.svg";

import { IButton } from "../../types/IButton.types";

export const VariantBtn: React.FC<IButton> = ({ variant }) => {
  return (
    <button className={s.variantBtn + " " + variant}>
      <PlusIcon />
      <span>Добавить список</span>
    </button>
  );
};
