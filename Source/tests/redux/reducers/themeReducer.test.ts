import {describe, expect, it} from "@jest/globals";
import {themeReducer} from "../../../redux/reducers/themeReducer";
import {ActionType} from "../../../redux/actions/themeAction";


describe('themeReducer', () => {
    const initialState = {
        theme: false,
    };

    it('should return the initial state', () => {
        expect(themeReducer(undefined, { type: undefined } as any)).toEqual(initialState);
    });

    it('should handle SWITCH_THEME action to enable theme', () => {
        const enableThemeAction = {
            type: ActionType.SWITCH_THEME,
            payload: true,
        };
        expect(themeReducer(initialState, enableThemeAction)).toEqual({
            ...initialState,
            theme: true,
        });
    });

    it('should handle SWITCH_THEME action to disable theme', () => {
        const initialStateWithThemeEnabled = { theme: true };
        const disableThemeAction = {
            type: ActionType.SWITCH_THEME,
            payload: false,
        };
        expect(themeReducer(initialStateWithThemeEnabled, disableThemeAction)).toEqual({
            ...initialStateWithThemeEnabled,
            theme: false,
        });
    });
});
