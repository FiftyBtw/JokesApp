import {describe, expect, it} from "@jest/globals";
import {ActionType, clearError, setError} from "../../../redux/actions/errorActions";

describe('Error Actions', () => {
    it('should create an action to set an error', () => {
        const testError = 'test error';
        const expectedAction = {
            type: ActionType.SET_ERROR,
            payload: testError
        };
        expect(setError(testError)).toEqual(expectedAction);
    });

    it('should create an action to clear the error', () => {
        const expectedAction = {
            type: ActionType.CLEAR_ERROR,
            payload: null
        };
        expect(clearError()).toEqual(expectedAction);
    });
});
