import React from 'react'
import cssStyles from "./TodoItem.module.css"
import {ReactComponent as CheckIcon} from "../../assets/icons/check_icon.svg";
import {VariantBtn } from "../index";

export const TodoItem: React.FC = () => {
    return (
        <div className={cssStyles.todoApp__todoItem}>
            <div className={cssStyles.disc__active}>
                <CheckIcon/>
            </div>
            <span className={cssStyles.todo__title}>Tекст задачи</span>
            <VariantBtn variant="delete-task">Удалить</VariantBtn>
        </div >
    )
}
