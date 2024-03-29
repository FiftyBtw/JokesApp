import {Joke} from "../../model/Joke";
import {SampleJoke} from "../../model/SampleJoke";
import {CustomJoke} from "../../model/CustomJoke";
import {Action, ActionType} from "../actions/jokeActions";

interface State {
    selectedJoke: any;
    sampleJokes: SampleJoke[];
    customJokes: CustomJoke[];
    favoritesJokes: Joke[],
    lastJokes: Joke[],
}

const initialState = {
    sampleJokes: [],
    customJokes: [],
    favoritesJokes: [],
    lastJokes: [],
    selectedJoke: null
}

export const jokeReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.FETCH_SAMPLE_JOKE:
            return {...state, sampleJokes: action.payload};
        case ActionType.FETCH_LAST_JOKE:
            return {...state, lastJokes: action.payload};
        case ActionType.FETCH_SELECTED_JOKE:
            return {...state, selectedJoke: action.payload}
        case ActionType.FETCH_CUSTOM_JOKE:
            return {...state, customJokes: action.payload}
        case ActionType.FETCH_FAVORITE_JOKE:
            return {...state, favoritesJokes: action.payload}
        default:
            return state;
    }
}