import {IListItem} from "../../types/IListItem.types";

interface IAction {
  type: string,
  payload: IListItem;
}

export const reducerActions = (state: IListItem[], action: IAction): IListItem[] => {
  switch(action.type) {
    case "add":
      return [...state, action.payload]

	// case "delete":

    default:
      return state
  }
}