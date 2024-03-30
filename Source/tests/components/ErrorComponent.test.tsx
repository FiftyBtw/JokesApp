import {combineReducers, createStore} from "redux";
import {fireEvent, render} from "@testing-library/react-native";
import ErrorComponent from "../../components/ErrorComponent";
import {Provider} from "react-redux";

const initialState = {
    errorReducer: {
        error: null,
    },
    themeReducer: {
        theme: false,
    },
};

const reducer = combineReducers({ errorReducer: (state = initialState.errorReducer) => state, themeReducer: (state = initialState.themeReducer) => state });
function renderWithRedux(
    ui,
    { initialState = {
        errorReducer: {
            error: null,
        },
        themeReducer: {
            theme: false,
        },
    } } = {}
) {
    // @ts-ignore
    const store = createStore(reducer, initialState);
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        store,
    };
}

describe('ErrorComponent', () => {
    it('should not display modal when there is no error', () => {
        const { queryByTestId } = renderWithRedux(<ErrorComponent />, { initialState });
        expect(queryByTestId('error-modal')).toBeNull();
    });

    it('should display modal with correct error message when there is an error', () => {
        const errorState = {
            ...initialState,
            errorReducer: {
                error: 'Test Error Message',
            },
        };
        const { getByText, getByTestId } = renderWithRedux(<ErrorComponent />, { initialState: errorState });
        expect(getByTestId('error-modal')).toBeTruthy();
        expect(getByText('Test Error Message')).toBeTruthy();
    });

    it('should close the modal and clear the error when close button is pressed', () => {
        const errorState = {
            ...initialState,
            errorReducer: {
                error: 'Test Error Message',
            },
        };
        const { getByText, queryByTestId } = renderWithRedux(<ErrorComponent />, { initialState: errorState });
        fireEvent.press(getByText('Fermer'));
        expect(queryByTestId('error-modal')).toBeNull();
    });
});
