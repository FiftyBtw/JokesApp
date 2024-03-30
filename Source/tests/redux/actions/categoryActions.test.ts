import {describe, expect, it} from "@jest/globals";
import {Category} from "../../../model/Category";
import {ActionType, setCategoriesList} from "../../../redux/actions/categoryActions";

describe('Categories Actions', () => {
    it('should create an action to set the categories list', () => {
        const testCategories: Category[] = [
            new Category('Category 1', 9),
            new Category('Category 2', 10)
        ];

        const expectedAction = {
            type: ActionType.FETCH_CATEGORIES,
            payload: testCategories
        };

        expect(setCategoriesList(testCategories)).toEqual(expectedAction);
    });
});
