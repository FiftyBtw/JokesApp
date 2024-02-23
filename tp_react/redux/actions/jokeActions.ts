import {Joke} from "../../model/Joke";

export enum ActionType {
    FETCH_JOKE = 'FETCH_JOKE',
    FETCH_LAST_JOKE = 'FETCH_LAST_JOKE',
    FETCH_SELECTED_JOKE = "FETCH_SELECTED_JOKE"
}

interface actionFetch {
    type: ActionType.FETCH_JOKE;
    payload: Joke[];
}

interface actionFetchLast {
    type: ActionType.FETCH_LAST_JOKE;
    payload: Joke[];
}

interface actionFetchSelected {
    type: ActionType.FETCH_SELECTED_JOKE;
    payload: Joke;
}

export type Action = actionFetch | actionFetchLast | actionFetchSelected;

export const setJokesList = (jokesList: Joke[]) => {
    return {
        type: ActionType.FETCH_JOKE,
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
