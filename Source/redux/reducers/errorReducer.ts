import {Action, ActionType} from "../actions/errorActions";

interface State {
    error: string;
}

const initialState = {
    error: null
}

export const errorReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        case 'CLEAR_ERROR':
            return { ...state, error: null };
        default:
            return state;
    }
}