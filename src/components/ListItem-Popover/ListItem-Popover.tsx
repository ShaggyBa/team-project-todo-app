import React from "react";
import { IPopover } from "../../types/IPopover.types";
import s from "./ListItem-Popover.module.css";

import { ReactComponent as CloseIcon } from "../../assets/icons/delete_icon_white.svg";
import { VariantBtn } from "../index";

import { colors } from "./Colors";

export const ListItemPopover: React.FC<IPopover> = ({ onClose, onSubmit }) => {
  return (
    <div className={s.popover}>
      <input
        type="text"
        className={s.popover__input}
        name="list-name"
        id=""
        placeholder="Название папки"
      />
      <div className={s.popover__listColors}>
        {colors.map((color, index) => {
          return (
            <span
              key={index}
              className={s.disc}
              style={{ backgroundColor: color }}
            ></span>
          );
        })}
      </div>
      <VariantBtn variant="add">Добавить</VariantBtn>
      <VariantBtn variant="close">
        <CloseIcon />
      </VariantBtn>
    </div>
  );
};
