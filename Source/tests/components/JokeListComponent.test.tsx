import {SampleJoke} from "../../model/SampleJoke";
import {combineReducers, createStore} from "redux";
import {render} from "@testing-library/react-native";
import '@testing-library/jest-native/extend-expect';
import {Provider} from "react-redux";
import {JokeListItem} from "../../components/JokeListComponent";
import {themeReducer} from "../../redux/reducers/themeReducer";

const mockJoke = new SampleJoke('general', 'Why did the chicken cross the road?', 'To get to the other side!', 'https://placekitten.com/200/403', 1);

const initialState = {
    themeReducer: {
        theme: false,
    },
};

const rootReducer = combineReducers({
    themeReducer
});

const createTestStore = (preloadedState) => createStore(
    rootReducer,
    preloadedState,
);

// @ts-ignore
const renderWithRedux = (component, { initialState } = {}) => {
    const store = createTestStore(initialState);
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    };
};

describe('JokeListItem', () => {
    it('renders correctly', () => {
        const { getByTestId } = renderWithRedux(<JokeListItem joke={mockJoke} />, { initialState });

        expect(getByTestId('jokeImage')).toHaveProp('source', { uri: mockJoke.image });
        expect(getByTestId('jokeSummary')).toHaveTextContent(mockJoke.summary());
        expect(getByTestId('jokeType')).toHaveTextContent(mockJoke.type);
    });
});
