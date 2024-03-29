import {describe, expect, it} from "@jest/globals";
import {categoryReducer} from "../../../redux/reducers/categoryReducer";
import {Category} from "../../../model/Category";
import {ActionType} from "../../../redux/actions/categoryActions";


describe('categoryReducer', () => {
    const initialState = {
        categories: [],
    };

    it('should return the initial state', () => {
        expect(categoryReducer(undefined, { type: undefined } as any)).toEqual(initialState);
    });

    it('should handle FETCH_CATEGORIES action', () => {
        const newCategories: Category[] = [
            new Category('Category 1', 9),
            new Category('Category 2', 10)
        ];
        const fetchCategoriesAction = {
            type: ActionType.FETCH_CATEGORIES,
            payload: newCategories,
        };
        expect(categoryReducer(initialState, fetchCategoriesAction)).toEqual({
            ...initialState,
            categories: newCategories,
        });
    });
});
