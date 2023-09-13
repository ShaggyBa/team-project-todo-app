import React from "react";
import { VariantBtn } from "../index";
import s from "./Sidebar.module.css";

import { ReactComponent as ListIcon } from "../../assets/icons/list-icon.svg";
import { ISidebar } from "../../types/ISidebar.types";

export const Sidebar: React.FC<ISidebar> = ({ lists }) => {
  const listsMap = lists.map((list) => (
    <li className={s.list__item} key={list.id}>
      <span className={s.disc}></span>
      <span className={s.item__title}>{list.title}</span>
    </li>
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
      <VariantBtn variant="add-list" />
    </aside>
  );
};
