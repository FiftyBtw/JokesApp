import {Joke} from "../../model/Joke";
import {SampleJoke} from "../../model/SampleJoke";

export enum ActionType {
    FETCH_SAMPLE_JOKE = 'FETCH_SAMPLE_JOKE',
    FETCH_CUSTOM_JOKE = 'FETCH_CUSTOM_JOKE',
    FETCH_LAST_JOKE = 'FETCH_LAST_JOKE',
    FETCH_SELECTED_JOKE = "FETCH_SELECTED_JOKE",
    ADD_JOKE = "ADD_JOKE",
    DELETE_JOKE = "DELETE_JOKE",
}

interface ActionFetch {
    type: ActionType.FETCH_SAMPLE_JOKE;
    payload: SampleJoke[];
}

interface ActionFetchLast {
    type: ActionType.FETCH_LAST_JOKE;
    payload: Joke[];
}

interface ActionFetchSelected {
    type: ActionType.FETCH_SELECTED_JOKE;
    payload: Joke;
}

interface ActionFetchCustom {
    type: ActionType.FETCH_CUSTOM_JOKE;
    payload: Joke;
}

interface ActionAddJoke {
    type: ActionType.ADD_JOKE;
    payload: Joke;
}

interface ActionDeleteJoke {
    type: ActionType.DELETE_JOKE;
    payload: Joke;
}

export type Action = ActionFetch | ActionFetchLast | ActionFetchSelected | ActionFetchCustom | ActionAddJoke | ActionDeleteJoke;

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