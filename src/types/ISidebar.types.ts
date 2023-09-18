type TLists = IList[];

interface IList {
  id: number;
  title: string;
  color: string;
}

export interface ISidebar {
  lists: TLists;
}
