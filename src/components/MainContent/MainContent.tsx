import React from 'react'
import cssStyles from "./MainContent.module.css"
import {TodoItem} from "../TodoItem";
import {TodoItemForm} from "../TodoItemForm";

export const MainContent: React.FC = () => {
	return (
		<main className={cssStyles.todoApp__taskArea}>
			<TodoItem></TodoItem>
			<TodoItem></TodoItem>
			<TodoItem></TodoItem>
			<TodoItem></TodoItem>
			<TodoItemForm></TodoItemForm>
		</main >
	)
}
