import React from 'react'
import cssStyles from "./TodoItemForm.module.css"
import {VariantBtn} from "../VariantBtn";

export const TodoItemForm: React.FC = () => {
    return (
        <div className={cssStyles.todoApp__todoItem}>
            <div className={cssStyles.plus}></div>
            <span className={cssStyles.todo__title}>Новая задача</span>
            <VariantBtn></VariantBtn>
        </div>
    )
}