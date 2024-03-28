import {Action, ActionType} from "../actions/errorActions";

interface State {
    error: string;
}

const initialState = {
    error: null
}

export const errorReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SET_ERROR:
            return { ...state, error: action.payload };
        case ActionType.CLEAR_ERROR:
            return { ...state, error: null };
        default:
            return state;
    }
}