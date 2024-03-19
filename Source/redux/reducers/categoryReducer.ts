import {Category} from "../../model/Category";
import {ActionType, Action} from "../actions/categoryActions";

interface State {
    categories: Category[];
}

const initialState = {
    categories: [],
}

export const categoryReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.FETCH_CATEGORIES:
            return {...state, categories: action.payload};
        default:
            return state;
    }
}