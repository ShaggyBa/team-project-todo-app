type TLists = IList[];

interface IList {
  id: number;
  title: string;
}

export interface ISidebar {
  lists: TLists;
}
