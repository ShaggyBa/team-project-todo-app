import React from "react";
import { IListItem } from "../../types/IListItem.types";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete_icon.svg";
import { VariantBtn } from "../index";

import s from "./ListItem.module.css";


export const ListItem: React.FC<IListItem> = ({id, title, color}) =>{
    return (
    <li className={s.list__item} key={id}>
        <span style = {{backgroundColor: color}} className={s.disc}></span>
        <span className={s.item__title}>{title}</span>
        <div className = {s.icon__item}><DeleteIcon /></div>
    </li>
    )
}