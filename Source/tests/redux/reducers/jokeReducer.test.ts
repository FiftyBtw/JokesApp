import {ActionType} from "../../../redux/actions/jokeActions";
import {jokeReducer} from "../../../redux/reducers/jokeReducer";
import {describe, expect, it} from "@jest/globals";
import {SampleJoke} from "../../../model/SampleJoke";
import {CustomJoke} from "../../../model/CustomJoke";

describe('jokeReducer', () => {
    const initialState = {
        sampleJokes: [],
        customJokes: [],
        favoritesJokes: [],
        lastJokes: [],
        selectedJoke: null
    };

    it('should return the initial state', () => {
        expect(jokeReducer(undefined, {} as any)).toEqual(initialState);
    });

    it('should handle FETCH_SAMPLE_JOKE action', () => {
        const sampleJokes: SampleJoke[] = [
            new SampleJoke('general', 'Why did the chicken cross the road?', 'To get to the other side!', 'image_url_1', 1),
            new SampleJoke('programming', 'Why do programmers prefer dark mode?', 'Because light attracts bugs!', 'image_url_2', 2)
        ];
        expect(jokeReducer(initialState, { type: ActionType.FETCH_SAMPLE_JOKE, payload: sampleJokes })).toEqual({
            ...initialState,
            sampleJokes
        });
    });

    it('should handle FETCH_LAST_JOKE action', () => {
        const lastJokes = [
            new SampleJoke('general', 'Joke 1', 'Punchline 1', 'https://placekitten.com/2024/2903', 3),
        ];
        expect(jokeReducer(initialState, { type: ActionType.FETCH_LAST_JOKE, payload: lastJokes })).toEqual({
            ...initialState,
            lastJokes
        });
    });

    it('should handle FETCH_SELECTED_JOKE action', () => {
        const selectedJoke = new CustomJoke('humor', 'Selected Joke', 'Selected Punchline', 'https://placekitten.com/2202/402', 'selected_id');
        expect(jokeReducer(initialState, { type: ActionType.FETCH_SELECTED_JOKE, payload: selectedJoke })).toEqual({
            ...initialState,
            selectedJoke
        });
    });

    it('should handle FETCH_CUSTOM_JOKE action', () => {
        const customJokes = [
            new CustomJoke('humor', 'Custom Joke', 'Custom Punchline', 'https://placekitten.com/200/403', 'custom_id'),
        ];
        // @ts-ignore
        expect(jokeReducer(initialState, { type: ActionType.FETCH_CUSTOM_JOKE, payload: customJokes })).toEqual({
            ...initialState,
            customJokes
        });
    });

    it('should handle ADD_JOKE action correctly', () => {
        const newJoke = new CustomJoke('humor', 'New Joke', 'New Punchline', 'https://placekitten.com/200/404', 'new_id');
        const stateAfterAdding = jokeReducer(initialState, { type: ActionType.ADD_JOKE, payload: newJoke });
        expect(stateAfterAdding.customJokes).toContainEqual(newJoke);
    });

    it('should handle DELETE_JOKE action correctly', () => {
        const existingJoke = new CustomJoke('humor', 'Existing Joke', 'Existing Punchline', 'https://placekitten.com/200/405', 'existing_id');
        const modifiedInitialState = { ...initialState, customJokes: [existingJoke] };
        const stateAfterDeletion = jokeReducer(modifiedInitialState, { type: ActionType.DELETE_JOKE, payload: existingJoke });
        expect(stateAfterDeletion.customJokes).not.toContainEqual(existingJoke);
    });
});