import React from "react";

import s from "./VariantBtn.module.css";

import { IButton } from "../../types/IButton.types";

export const VariantBtn: React.PropsWithChildren<React.FC<IButton>> = ({
  variant,
  onClick,
  children,
  ...rest
}) => {
  return (
    <button className={s.variantBtn + " " + s[`${variant}`]} onClick={onClick}>
      {children}
    </button>
  );
};
