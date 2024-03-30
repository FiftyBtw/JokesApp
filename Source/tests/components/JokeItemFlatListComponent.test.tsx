import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import { createStore, combineReducers } from 'redux';
import { themeReducer } from '../../redux/reducers/themeReducer';
import { JokeItemFlatListComponent } from '../../components/JokeItemFlatListComponent';
import { SampleJoke } from '../../model/SampleJoke';

const mockJoke = new SampleJoke('general', 'Why did the chicken cross the road?', 'To get to the other side!', 'https://placekitten.com/200/403', 1);

const rootReducer = combineReducers({
    themeReducer,
});

const renderWithRedux = (component, initialState) => {
    const store = createStore(rootReducer, initialState);
    render(<Provider store={store}>{component}</Provider>);
    return store;
};

describe('JokeItemFlatListComponent', () => {
    it('renders correctly (light)', () => {
        renderWithRedux(<JokeItemFlatListComponent joke={mockJoke} />, {
            themeReducer: {
                theme: false,
            },
        });

        expect(screen.getByTestId('jokeImage')).toHaveProp('source', { uri: mockJoke.image });
        expect(screen.getByTestId('jokeSummary')).toHaveTextContent(mockJoke.summary());
        expect(screen.getByTestId('jokeType')).toHaveTextContent(mockJoke.type);
    });

    it('renders correctly (dark)', () => {
        renderWithRedux(<JokeItemFlatListComponent joke={mockJoke} />, {
            themeReducer: {
                theme: true,
            },
        });

        expect(screen.getByTestId('jokeImage')).toHaveProp('source', { uri: mockJoke.image });
        expect(screen.getByTestId('jokeSummary')).toHaveTextContent(mockJoke.summary());
        expect(screen.getByTestId('jokeType')).toHaveTextContent(mockJoke.type);
    });
});
