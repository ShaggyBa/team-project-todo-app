import React from 'react'
import cssStyles from "./MainContent.module.css"
import {TodoItem} from "../TodoItem";
import {TodoItemForm} from "../TodoItemForm";

export const MainContent: React.FC = () => {
	return (
		<main className={cssStyles.todoApp__taskArea}>
			<h1>Фронтенд</h1>
			<line className={cssStyles.line}>w</line>
			<TodoItem></TodoItem>
			<TodoItem></TodoItem>
			<TodoItem></TodoItem>
			<TodoItem></TodoItem>
			<TodoItemForm></TodoItemForm>
		</main >
	)
}
