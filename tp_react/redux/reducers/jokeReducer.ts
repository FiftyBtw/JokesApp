import {Action, ActionType} from "../actions/jokeActions";
import {Joke} from "../../model/Joke";

interface State {
    selectedJoke: any;
    jokes: Joke[];
    favoritesJokes: Joke[],
    lastJokes: Joke[],
}

const initialState = {
    jokes: [],
    favoritesJokes: [],
    lastJokes: [],
    selectedJoke: Joke
}

export const jokeReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.FETCH_JOKE:
            return {...state, jokes: action.payload};
        case ActionType.FETCH_LAST_JOKE:
            return {...state, lastJokes: action.payload};
        case ActionType.FETCH_SELECTED_JOKE:
            return {...state, selectedJoke: action.payload}
        default:
            return state;
    }
}