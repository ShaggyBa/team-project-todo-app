import React from "react";
import { ListItemPopover, VariantBtn, ListItem } from "../index";
import s from "./Sidebar.module.css";

import { ISidebar } from "../../types/ISidebar.types";

import { ReactComponent as PlusIcon } from "../../assets/icons/plus_icon.svg";
import { ReactComponent as ListIcon } from "../../assets/icons/list-icon.svg";


export const Sidebar: React.FC<ISidebar> = ({ lists }) => {
  const listsMap = lists.map((list) => (
    <ListItem key = {list.id} id = {list.id} title = {list.title} color = {list.color} />
  ));
  return (
    <aside className={s.sidebar}>
      <ul className={s.sidebar__filters}>
        <li className={s.sidebar__filters__item}>
          <ListIcon />
          <span>Все задачи</span>
        </li>
        {/* filter-1 */}
        {/* filter-2 */}
        {/* filter-3 */}
      </ul>
      <ul className={s.sidebar__lists}>{listsMap}</ul>
      <VariantBtn variant="add-list">
        <PlusIcon />
        <span>Добавить список</span>
      </VariantBtn>
      <ListItemPopover />
    </aside>
  );
};
