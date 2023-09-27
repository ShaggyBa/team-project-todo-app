import React from 'react'
import s from "./ListView.module.css"
import { TodoItem } from "../TodoItem";
import { TodoItemForm } from "../TodoItemForm";

import { IListView } from "../../types/IListView"
IListView

import { addTaskAC, deleteTaskAC, reducerActions } from "./ListViewReducer"

import { ReactComponent as ChangeIcon } from "../../assets/icons/change_icon.svg";
import { VariantBtn } from '../VariantBtn';

export const ListView: React.FC<IListView> = ({ list }) => {

	const [todoItems, dispatch] = React.useReducer(reducerActions, []);

	const handleAddList = (taskText: string) => {
		dispatch(addTaskAC(taskText));
	}
	const handleDeleteList = (id: number) => {
		dispatch(deleteTaskAC(id));
	}

	const todoMap = React.useMemo(() => todoItems.map(
		({id, title, complete}) => <TodoItem handleDeleteList={handleDeleteList} key={id} id={id} title={title} complete={complete} />),
		[todoItems]);

	return (
		list ? <main className={s.listView}>
			<div className={s.listView__title}>
				<h1>{list.title}</h1>
				<VariantBtn variant='edit-title'>
					<ChangeIcon />
				</VariantBtn>
			</div>
			<div className={s.line} />
			{todoMap}
			<TodoItemForm handleAddList={handleAddList}></TodoItemForm>
		</main >
			: <div className={s.noTasks}>Задачи отсутствуют</div>
	)
}
