import React from 'react'
import cssStyles from "./TodoItemForm.module.css"

export const TodoItemForm: React.FC = () => {
    return (
        <div className={cssStyles.todoApp__todoItem}>
            <div className={cssStyles.d24}></div>
            <span className={cssStyles.todo__title}>Новая задача</span>
        </div>
    )
}