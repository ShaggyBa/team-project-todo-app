
import { ITodoItem } from "../../types/ITodoItem.types";

export enum TasksActionTypes {
  ADD_TASK = 'ADD_TASK',
  DELETE_TASK = 'DELETE_TASK',
}

interface IAddAction {
  type: TasksActionTypes.ADD_TASK,
  payload: ITodoItem;
}

interface IDeleteAction {
  type: TasksActionTypes.DELETE_TASK,
  payload: number;
}

type IAction = IAddAction | IDeleteAction;


export const reducerActions = (state: ITodoItem[], action: IAction): ITodoItem[] => {
  switch(action.type) {
    case TasksActionTypes.ADD_TASK:
      return [...state, {...action.payload, id: state.length + 1}];

    case TasksActionTypes.DELETE_TASK:
      return [...state.filter(task => task.id !== action.payload)];

      default:
        return state
  }
}

export const addTaskAC = (title: string): IAction => {
  return {type: TasksActionTypes.ADD_TASK, payload: {title: title, complete: false, id: 0}}
}

export const deleteTaskAC = (id: number): IAction => {
  return {type: TasksActionTypes.DELETE_TASK, payload: id}
}