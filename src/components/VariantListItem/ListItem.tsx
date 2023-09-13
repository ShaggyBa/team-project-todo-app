import React from "react";
import { IListItem } from "../../types/IListItem.types";

import s from "./ListItem.module.css";

interface ListItemProps {
    item: IListItem
}

export function ListItem({item}: ListItemProps) {
    return (
        <div>
            <p className = {s.listItem}>{item.title}</p>          
        </div>
    )
}