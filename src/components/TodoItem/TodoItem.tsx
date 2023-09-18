import React from 'react'
import cssStyles from "./TodoItem.module.css"

export const TodoItem: React.FC = () => {
    return (
        <div className={cssStyles.todoApp__todoItem}>
            <span className={cssStyles.disc__active}></span>
            <span className={cssStyles.todo__title}>Tекст задачи</span>
            <span className={cssStyles.todo__delete}></span>
        </div >
    )
}
