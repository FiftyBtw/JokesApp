import {describe, expect, it} from "@jest/globals";
import {Joke} from "../../../model/Joke";
import {
    ActionType,
    setCustomJoke, setFavoriteJoke,
    setJokesList,
    setLastJokesList,
    setSelectedJoke
} from "../../../redux/actions/jokeActions";
import {CustomJoke} from "../../../model/CustomJoke";
import {SampleJoke} from "../../../model/SampleJoke";


describe('Joke Actions', () => {
    it('should create an action to set the jokes list', () => {
        const jokes: Joke[] = [
            new SampleJoke('general', 'Why did the chicken cross the road?', 'To get to the other side!', 'https://placekitten.com/200/403', 1),
            new CustomJoke('programming', 'Why do programmers prefer dark mode?', 'Because light attracts bugs!', 'https://placekitten.com/200/404', "2"),
        ];

        const expectedAction = {
            type: ActionType.FETCH_SAMPLE_JOKE,
            payload: jokes,
        };

        expect(setJokesList(jokes)).toEqual(expectedAction);
    });

    it('should create an action to set the selected joke', () => {
        const selectedJoke = new SampleJoke('general', 'Why did the chicken cross the road?', 'To get to the other side!', 'https://placekitten.com/200/403', 1);
            const expectedAction = {
            type: ActionType.FETCH_SELECTED_JOKE,
            payload: selectedJoke,
        };

        expect(setSelectedJoke(selectedJoke)).toEqual(expectedAction);
    });

    it('should create an action to set a custom joke', () => {
        const customJoke = new CustomJoke('general', 'I told my wife she was drawing her eyebrows too high.', 'She looked surprised.', 'image_url_4', 'custom_id_1');

        const expectedAction = {
            type: ActionType.FETCH_CUSTOM_JOKE,
            payload: customJoke,
        };

        expect(setCustomJoke(customJoke)).toEqual(expectedAction);
    });

    it('should create an action to set the last jokes list', () => {
        const jokes: Joke[] = [
            new SampleJoke('general', 'Why did the chicken cross the road?', 'To get to the other side!', 'https://placekitten.com/200/403', 1),
            new CustomJoke('programming', 'Why do programmers prefer dark mode?', 'Because light attracts bugs!', 'https://placekitten.com/200/404', "2"),
        ];

        const expectedAction = {
            type: ActionType.FETCH_LAST_JOKE,
            payload: jokes,
        };

        expect(setLastJokesList(jokes)).toEqual(expectedAction);
    });

    //setFavoriteJoke
    it('should create an action to set the favorite jokes list', () => {
        const jokes: Joke[] = [
            new SampleJoke('general', 'Why did the chicken cross the road?', 'To get to the other side!', 'https://placekitten.com/200/403', 1),
            new CustomJoke('programming', 'Why do programmers prefer dark mode?', 'Because light attracts bugs!', 'https://placekitten.com/200/404', "2"),
        ];

        const expectedAction = {
            type: ActionType.FETCH_FAVORITE_JOKE,
            payload: jokes,
        };

        expect(setFavoriteJoke(jokes)).toEqual(expectedAction);
    });
});
