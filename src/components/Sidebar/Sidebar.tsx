import React from "react";
import { ListItemPopover, VariantBtn } from "../index";
import s from "./Sidebar.module.css";

import { ISidebar } from "../../types/ISidebar.types";

import { ReactComponent as PlusIcon } from "../../assets/icons/plus_icon.svg";
import { ReactComponent as ListIcon } from "../../assets/icons/list-icon.svg";

import { IList } from "../../types/ILists.types";

export const Sidebar: React.FC<ISidebar> = ({ lists }) => {
  // const [listItems, setListItems] = React.useState<ListItem[]>(lists); - когда появится ListItem

  const [listItems, setListItems] = React.useState<IList[]>(lists);

  const lastIdOfList = React.useRef(listItems.length);

  const listsMap = React.useMemo(() => {
    return listItems.map((list) => (
      <li className={s.list__item} key={list.id}>
        <span className={s.disc}></span>
        <span className={s.item__title}>{list.title}</span>
      </li>
    ));
  }, [listItems]);

  const handleAddList = React.useCallback(
    (newList: IList) => {
      setListItems([...listItems, newList]);
      lastIdOfList.current += 1;
    },
    [listItems]
  );

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
      <ListItemPopover
        lastListId={lastIdOfList.current}
        addList={handleAddList}
      />
    </aside>
  );
};
