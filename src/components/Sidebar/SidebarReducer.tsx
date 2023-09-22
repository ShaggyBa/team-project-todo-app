import {IList} from "../../types/ILists.types";

interface IAction {
  type: string,
  payload: IList;
}

export const reducerActions = (state: IList[], action: IAction): IList[] => {
  switch(action.type) {
    case "add":
      return [...state, action.payload]

	// case "delete":

    default:
      return state
  }
}