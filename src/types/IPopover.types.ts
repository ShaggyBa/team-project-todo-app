import { IListItem } from "./IListItem.types";
export interface IPopover {
  lastListId: number;
  addList: ({ id, title, color, tasks:[] }: IListItem) => void;
  onClose: () => void;
}
