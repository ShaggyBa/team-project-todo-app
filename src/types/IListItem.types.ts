import { ITodoItem } from "./ITodoItem.types";


export interface IListItem {
    id: number;
    title: string;
    color: string;
	 tasks: ITodoItem[];
}