import {Joke} from "../../model/Joke";
import {SampleJoke} from "../../model/SampleJoke";

export enum ActionType {
    FETCH_SAMPLE_JOKE = 'FETCH_SAMPLE_JOKE',
    FETCH_CUSTOM_JOKE = 'FETCH_CUSTOM_JOKE',
    FETCH_LAST_JOKE = 'FETCH_LAST_JOKE',
    FETCH_SELECTED_JOKE = "FETCH_SELECTED_JOKE",
    ADD_JOKE = "ADD_JOKE",
}

interface actionFetch {
    type: ActionType.FETCH_SAMPLE_JOKE;
    payload: SampleJoke[];
}

interface actionFetchLast {
    type: ActionType.FETCH_LAST_JOKE;
    payload: Joke[];
}

interface actionFetchSelected {
    type: ActionType.FETCH_SELECTED_JOKE;
    payload: Joke;
}

interface actionFetchCustom {
    type: ActionType.FETCH_CUSTOM_JOKE;
    payload: Joke;
}

interface actionAddJoke {
    type: ActionType.ADD_JOKE;
    payload: Joke;
}

export type Action = actionFetch | actionFetchLast | actionFetchSelected | actionFetchCustom | actionAddJoke;

export const setJokesList = (jokesList: Joke[]) => {
    return {
        type: ActionType.FETCH_SAMPLE_JOKE,
        payload: jokesList,
    };
}

export const setLastJokesList = (lastJokesList: Joke[]) => {
    return {
        type: ActionType.FETCH_LAST_JOKE,
        payload: lastJokesList,
    };
}

export const setSelectedJoke = (selectedJoke: Joke) => {
    return {
        type: ActionType.FETCH_SELECTED_JOKE,
        payload: selectedJoke,
    }
}

export const setCustomJoke = (customJoke: Joke) => {
    return {
        type: ActionType.FETCH_CUSTOM_JOKE,
        payload: customJoke,
    }
}

export const addJoke = (joke: Joke) => {
    return {
        type: ActionType.ADD_JOKE,
        payload: joke,
    }
}