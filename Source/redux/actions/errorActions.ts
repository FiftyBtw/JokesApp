export enum ActionType {
    SET_ERROR = 'SET_ERROR',
    CLEAR_ERROR = 'CLEAR_ERROR'
}

interface ActionAdd {
    type: ActionType.SET_ERROR;
    payload: string;
}

interface ActionReset {
    type: ActionType.CLEAR_ERROR;
    payload: null;
}

export type Action = ActionAdd | ActionReset ;

export const setError = (error: string) => {
    return {
        type: ActionType.SET_ERROR,
        payload: error
    };
}

export const clearError = () => {
    return {
        type: ActionType.CLEAR_ERROR,
        payload: null
    };
}