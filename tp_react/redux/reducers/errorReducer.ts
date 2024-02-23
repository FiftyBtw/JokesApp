import {Action, ActionType} from "../actions/errorActions";

interface State {
    error: string;
}

const initialState = {
    error: ""
}

export const errorReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.ADD_ERROR:
            return {...state, error: action.payload};
        case ActionType.RESET_ERROR :
            return {...state, error: action.payload};
        default:
            return state;
    }
}