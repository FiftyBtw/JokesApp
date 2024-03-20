import { Category} from "../../model/Category";

export enum ActionType {
    FETCH_CATEGORIES = 'FETCH_CATEGORIES',
}

interface actionFetch {
    type: ActionType.FETCH_CATEGORIES;
    payload: Category[];
}

export type Action = actionFetch;

export const setCategoriesList = (categoriesList: Category[]) => {
    return {
        type: ActionType.FETCH_CATEGORIES,
        payload: categoriesList,
    };
}