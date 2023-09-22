import React, { useState, useReducer } from "react";
import { ListItemPopover, VariantBtn, ListItem } from "../index";
import s from "./Sidebar.module.css";

import { ISidebar } from "../../types/ISidebar.types";

import { ReactComponent as PlusIcon } from "../../assets/icons/plus_icon.svg";
import { ReactComponent as ListIcon } from "../../assets/icons/list-icon.svg";

import { IList } from "../../types/ILists.types";

import {reducerActions} from "./SidebarReducer";

export const Sidebar: React.FC<ISidebar> = ({ lists }) => {

  const [listItems, dispatch] = useReducer(reducerActions, lists);

  const [isShown, setIsShown] = useState(false);
  const handleShowPopover = () => {
    setIsShown(current => !current);
  }

  const lastIdOfList = React.useRef(listItems.length + 1);

  const listsMap = listItems.map((list, index) => (
    <ListItem key={index} id={index} title={list.title} color={list.color}/>
  ));
  
  const handleAddList = React.useCallback(
    (newList: IList | undefined) => {
		if (newList !== undefined) {
      dispatch({ type: "add", payload: newList });
		}
    },
    []
  );

	//* To-do: const handleDeleteList = (id: number) = {...}

  return (
    <aside className={s.sidebar}>
      {listsMap.length > 0 && <ul className={s.sidebar__filters}>
        <li className={s.sidebar__filters__item}>
          <ListIcon />
          <span>Все задачи</span>
        </li>
      </ul>}
      <ul className={s.sidebar__lists}>{listsMap}</ul>
      <VariantBtn onClick={handleShowPopover} variant="add-list">
        <PlusIcon />
        <span>Добавить список</span>
      </VariantBtn>
      {isShown && (
        <ListItemPopover onClose={handleShowPopover}
          lastListId={lastIdOfList.current}
          addList={handleAddList}
        />
      )}
    </aside>
  );
};