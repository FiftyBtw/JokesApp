export enum ActionType {
    SET_ERROR = 'SET_ERROR',
    CLEAR_ERROR = 'CLEAR_ERROR'
}

interface actionAdd {
    type: ActionType.SET_ERROR;
    payload: string;
}

interface actionReset {
    type: ActionType.CLEAR_ERROR;
    payload: string;
}

export type Action = actionAdd | actionReset ;

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