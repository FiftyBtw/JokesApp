export enum ActionType {
    ADD_ERROR = 'ADD_ERROR',
    RESET_ERROR = 'RESET_ERROR'
}

interface actionAdd {
    type: ActionType.ADD_ERROR;
    payload: string;
}

interface actionReset {
    type: ActionType.RESET_ERROR;
    payload: string;
}

export type Action = actionAdd | actionReset ;

export const setError = (error: string) => {
    return {
        type: ActionType.ADD_ERROR,
        payload: error
    };
}

export const resetError = () => {
    return {
        type: ActionType.RESET_ERROR,
        payload: ""
    }
}