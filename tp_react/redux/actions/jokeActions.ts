import {SampleJoke} from "../../model/SampleJoke";
import {Joke} from "../../model/Joke";
import {JokeFactory} from "../../model/JokeFactory";

export enum ActionType {
    FETCH_JOKE = 'FETCH_JOKE',
    FETCH_LAST_JOKE = 'FETCH_LAST_JOKE'
}

interface actionFetch {
    type: ActionType.FETCH_JOKE;
    payload: Joke[];
}

interface actionFetchLast {
    type: ActionType.FETCH_LAST_JOKE;
    payload: Joke[];
}

export type Action = actionFetch | actionFetchLast;

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
