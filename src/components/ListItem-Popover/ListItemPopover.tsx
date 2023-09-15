import React from "react";
import { IPopover } from "../../types/IPopover.types";
import s from "./ListItemPopover.module.css";

import { ReactComponent as CloseIcon } from "../../assets/icons/delete_icon_white.svg";
import { VariantBtn } from "../index";

import { colors } from "./Colors";

export const ListItemPopover: React.FC<IPopover> = ({
  lastListId,
  addList,
}) => {
  const [titleValue, setTitleValue] = React.useState<string>("");

  const [currentColor, setCurrentColor] = React.useState<string>("");

  const changeTitleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };

  const changeColor = (color: string) => {
    setCurrentColor(color);
  };

  const handleAddClick = () => {
    if (titleValue === "" || currentColor === "") return;
    addList({ id: lastListId + 1, title: titleValue, color: currentColor });
    changeColor("");
    setTitleValue("");
  };

  return (
    <div className={s.popover}>
      <input
        type="text"
        className={s.popover__input}
        name="list-name"
        id=""
        placeholder="Название списка"
        value={titleValue}
        onInput={changeTitleValue}
        maxLength={100}
      />
      <div className={s.popover__listColors}>
        {colors.map((color, index) => {
          return (
            <span
              key={index}
              className={s.disc}
              style={{ backgroundColor: color }}
              onClick={() => changeColor(color)}
            ></span>
          );
        })}
      </div>
      <VariantBtn variant="add" onClick={handleAddClick}>
        Добавить
      </VariantBtn>
      <VariantBtn variant="close">
        <CloseIcon />
      </VariantBtn>
    </div>
  );
};
