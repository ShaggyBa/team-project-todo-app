export interface ITodoItem {
	id: number;
	complete: boolean;
	title: string;
}

export interface ITodoItemComponent extends ITodoItem {
	handleDeleteList: (id: number) => void;
}