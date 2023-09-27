import React from 'react'
import s from "./ListView.module.css"
import {TodoItem} from "../TodoItem";
import {TodoItemForm} from "../TodoItemForm";

import {IListView} from "../../types/IListView.types"

import {reducerActions} from "./ListViewReducer"

import { ReactComponent as ChangeIcon } from "../../assets/icons/change_icon.svg";
import { VariantBtn } from '../VariantBtn';

export const ListView: React.FC<IListView> = ({list}) => {

  const [todoItems, dispatch] = React.useReducer(reducerActions, []);

  const todoMap = React.useMemo(() => todoItems.map(
	(list, index) =>  <TodoItem key={index}/>), 
	[todoItems]);

	const [isEditTitle, setIsEditTitle] = React.useState(false);

	return (
	list ? <main className={s.listView}>
			<div className={s.listView__title}>
				<h1>{list.title}</h1>
				<VariantBtn variant='edit-title'>
					<ChangeIcon />
				</VariantBtn>
			</div>
			<div className={s.line}/>
			{todoMap}
			<TodoItemForm></TodoItemForm>
		</main >
	: <div className={s.noTasks}>Задачи отсутствуют</div>
	)
}
