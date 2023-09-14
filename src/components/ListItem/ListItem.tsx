import React from "react";
import { IListItem } from "../../types/IListItem.types";

import s from "./ListItem.module.css";


export const ListItem: React.FC<IListItem> = ({id, title, color}) =>{
    return (
    <li className={s.list__item} key={id}>
        <span className={s.disc + " " + s[color]}></span>
        <span className={s.item__title}>{title}</span>
    </li>
    )
}