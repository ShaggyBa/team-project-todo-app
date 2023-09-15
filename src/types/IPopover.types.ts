import { IList } from "./ILists.types";

export interface IPopover {
  lastListId: number;
  addList: ({ id, title, color }: IList) => void;
}
