import {describe, expect, it} from "@jest/globals";
import {errorReducer} from "../../../redux/reducers/errorReducer";
import {ActionType} from "../../../redux/actions/errorActions";


describe('errorReducer', () => {
    const initialState = {
        error: null,
    };

    it('should return the initial state', () => {
        expect(errorReducer(undefined, { type: undefined, payload: '' })).toEqual(initialState);
    });

    it('should handle SET_ERROR action', () => {
        const errorMessage = 'This is an error';
        /*
        const setErrorAction = {
            type: ActionType.SET_ERROR,
            payload: errorMessage,
        };
        */
        expect(errorReducer(initialState, {type: ActionType.SET_ERROR, payload: errorMessage})).toEqual({
            ...initialState,
            error: errorMessage,
        });
    });

    it('should handle CLEAR_ERROR action', () => {
        const initialStateWithError = { error: 'Existing error' };
        const clearErrorAction = {
            type: ActionType.CLEAR_ERROR,
            payload: null,
        };
        expect(errorReducer(initialStateWithError, clearErrorAction)).toEqual(initialState);
    });
});
