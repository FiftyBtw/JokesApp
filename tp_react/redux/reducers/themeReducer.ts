import {Action, ActionType} from "../actions/themeAction";

const initialState = {
    theme: false
};

export const themeReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SWITCH_THEME:
            return { ...state, theme: action.payload };
        default:
            return state;
    }
};