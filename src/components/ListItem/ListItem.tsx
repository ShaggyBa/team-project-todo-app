import React from "react";
import { IList } from "../../types/ILists.types";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete_icon.svg";
import s from "./ListItem.module.css";

// function active() {
//     console.log("active");
// }


export const ListItem: React.FC<IList> = ({id, title, color}) =>{
    return (
    <li className={s.list__item} key={id}>
        <span style = {{backgroundColor: color}} className={s.disc}></span>
        <span className={s.item__title}>{title}</span>
        <div className = {s.icon__item}><DeleteIcon /></div>
    </li>
    )
}