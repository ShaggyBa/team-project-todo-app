import React from 'react'
import cssStyles from "./TodoItemForm.module.css"
import {VariantBtn} from "../index";

export const TodoItemForm: React.FC = () => {
    return (
        <div className={cssStyles.todoApp__todoItem}>
            <div className={cssStyles.plus}></div>
            <input placeholder="Новая задача..."/>
            <VariantBtn variant="add-task">Добавить задачу</VariantBtn>
        </div>
    )
}