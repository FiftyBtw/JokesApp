export enum ActionType{
    SWITCH_THEME = 'SWITCH_THEME',
}

interface actionSwitchTheme {
    type: ActionType.SWITCH_THEME;
    payload: boolean;
}

export type Action = actionSwitchTheme;

export const switchTheme = (theme: boolean) => {
    return {
        type: ActionType.SWITCH_THEME,
        payload: theme,
    };
}