export enum ActionType{
    SWITCH_THEME = 'SWITCH_THEME',
}

interface ActionSwitchTheme {
    type: ActionType.SWITCH_THEME;
    payload: boolean;
}

export type Action = ActionSwitchTheme;

export const switchTheme = (theme: boolean) => {
    return {
        type: ActionType.SWITCH_THEME,
        payload: theme,
    };
}