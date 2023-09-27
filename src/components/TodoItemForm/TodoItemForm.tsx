import React, { useState } from 'react'
import cssStyles from "./TodoItemForm.module.css"
import { VariantBtn } from "../index";
import { IToDoItemForm } from '../../types/IToDoItemForm';

export const TodoItemForm: React.FC<IToDoItemForm> = (props: IToDoItemForm) => {
    const [inputValue, setInputValue] = useState("");

    const eventChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => { setInputValue(e.target.value); }

    const handleAddTask = () => {
        props.handleAddList(inputValue);
        setInputValue("");
    }
    const handleCancel = () => {setInputValue("")}
    return (
        <div className={cssStyles.todoApp__todoItem}>
            <div className={cssStyles.todoApp__todoItem_inputArea}>
                <input className={cssStyles.todoApp__todoItem_input} value={inputValue} onChange={eventChangeHandler} placeholder="Текст задачи" maxLength={70} />
            </div>
            <div className={cssStyles.todoApp__todoItem_buttonsArea}>
                <VariantBtn onClick={handleAddTask} variant="add-task">Добавить задачу</VariantBtn>
                <VariantBtn onClick={handleCancel} variant="cancel">Отмена</VariantBtn>
            </div>
        </div>
    )
}