import {ActionType} from "../../../redux/actions/jokeActions";
import {jokeReducer} from "../../../redux/reducers/jokeReducer";
import {describe, expect, it} from "@jest/globals";
import {SampleJoke} from "../../../model/SampleJoke";
import {CustomJoke} from "../../../model/CustomJoke";
import {Joke} from "../../../model/Joke";

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

    it('should handle FETCH_FAVORITE_JOKE action', () => {
        const favoriteJokes: Joke[] = [
            new SampleJoke('general', 'What do you get when you cross a snowman with a vampire?', 'Frostbite.', 'https://placekitten.com/200/300', 4),
            new CustomJoke('humor', 'How do you organize a space party?', 'You planet.', 'https://placekitten.com/210/310', 'space_party_id')
        ];
        expect(jokeReducer(initialState, { type: ActionType.FETCH_FAVORITE_JOKE, payload: favoriteJokes})).toEqual({
            ...initialState,
            favoritesJokes: favoriteJokes
        });
    });

});