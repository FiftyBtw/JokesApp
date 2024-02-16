import {ActionType, Action} from "../actions/jokeActions";
import {SampleJoke} from "../../model/SampleJoke";
import {log} from "expo/build/devtools/logger";
import {Joke} from "../../model/Joke";

interface State {
    jokes: Joke[];
    favoritesJokes: Joke[],
    lastJokes: Joke[],
}

const initialState = {
    jokes: [],
    favoritesJokes: [],
    lastJokes: [],
}

export const jokeReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.FETCH_JOKE:
            return {...state, jokes: action.payload};
        case ActionType.FETCH_LAST_JOKE:
            return {...state, lastJokes: action.payload};
        default:
            return state;
    }
}