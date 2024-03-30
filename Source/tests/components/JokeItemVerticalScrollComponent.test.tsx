import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import { createStore, combineReducers } from 'redux';
import {SampleJoke} from "../../model/SampleJoke";
import {themeReducer} from "../../redux/reducers/themeReducer";
import JokeItemVerticalScrollComponent from "../../components/JokeItemVerticalScrollComponent";


const mockJoke = new SampleJoke('general', 'Why did the chicken cross the road?', 'To get to the other side!', 'https://placekitten.com/200/300', 1);

const rootReducer = combineReducers({
    themeReducer,
});

const renderWithRedux = (component, initialState) => {
    const store = createStore(rootReducer, initialState);
    render(<Provider store={store}>{component}</Provider>);
    return store;
};

describe('JokeItemVerticalScrollComponent', () => {
    it('renders correctly with given joke data', () => {
        renderWithRedux(<JokeItemVerticalScrollComponent joke={mockJoke} />, {
            themeReducer: {
                theme: false,
            },
        });

        expect(screen.getByTestId('jokeImage-scroll')).toHaveProp('source', { uri: mockJoke.image });
        expect(screen.getByTestId('jokeSummary-scroll')).toHaveTextContent(mockJoke.summary());
    });
});
