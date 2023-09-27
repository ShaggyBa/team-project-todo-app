import { IList } from "../types/ILists.types";

export const ListItemsData: IList[] = [
    {
        "id": 1,
        "title": "Важные дела",
        "color": "var(--gray_800)",
		  "tasks": [{"id": 1, "complete": true, "title": "Помыть машину"}, {"id": 2, "complete": false, "title": "Помыть окна"}]
    },
    {
        "id": 2,
        "title": "Не очень важные дела ",
        "color": "var(--dirtTurquoise_50)",
		  "tasks": []
    },
    {
        "id": 3,
        "title": "Совсем неважные дела",
        "color": "var(--cyan_100)",
		  "tasks": []
    },
    {
        "id": 4,
        "title": "Никогда не выполнять ",
        "color": "var(--pink_100)",
		  "tasks": []
    }
]