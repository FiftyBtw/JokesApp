import {describe, expect, it} from "@jest/globals";
import {ActionType} from "../../../redux/actions/themeAction";
import {switchTheme} from "../../../redux/actions/themeAction";

describe('Theme actions', () => {
    it('should create an action to switch theme', () => {
        const theme = true;
        const expectedAction = {
            type: ActionType.SWITCH_THEME,
            payload: theme,
        };

        expect(switchTheme(theme)).toEqual(expectedAction);
    });
});
