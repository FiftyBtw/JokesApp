import { Category} from "../../model/Category";

export enum ActionType {
    FETCH_CATEGORIES = 'FETCH_CATEGORIES',
}

interface ActionFetch {
    type: ActionType.FETCH_CATEGORIES;
    payload: Category[];
}

export type Action = ActionFetch;

export const setCategoriesList = (categoriesList: Category[]) => {
    return {
        type: ActionType.FETCH_CATEGORIES,
        payload: categoriesList,
    };
}