import React from 'react'
import cssStyles from "./TodoItem.module.css"
import { ReactComponent as CheckIcon } from "../../assets/icons/check_icon.svg";
import { VariantBtn } from "../index";
import { ITodoItemComponent } from '../../types/ITodoItem.types';

export const TodoItem: React.FC<ITodoItemComponent> = ({ id, title, complete, handleDeleteList }) => {
    const handleDelete = () => {
        handleDeleteList(id);
    }
    return (
        <div className={cssStyles.todoApp__todoItem}>
            {/*TO-DO для того, кто верстает: Доверстать checkbox*/}
            <div className={cssStyles.disc__active}>
                <CheckIcon />
            </div>
            <div className={cssStyles.todoApp__todoItem_taskInfo}>
                <span className={cssStyles.todo__title}>{title}</span>
                <VariantBtn onClick={handleDelete} variant="delete-task">Удалить</VariantBtn>
            </div>
        </div >
    )
}
