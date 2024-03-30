import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { render, screen, fireEvent } from '@testing-library/react-native';
import ErrorComponent from '../../components/ErrorComponent';
import {errorReducer} from "../../redux/reducers/errorReducer";
import {themeReducer} from "../../redux/reducers/themeReducer";


const rootReducer = combineReducers({
    errorReducer,
    themeReducer,
});

const renderComponentWithRedux = (ui, initialState) => {
    const store = createStore(rootReducer, initialState);
    render(<Provider store={store}>{ui}</Provider>);
    return store;
};

describe('ErrorComponent', () => {
    it('should not display modal when there is no error', () => {
        renderComponentWithRedux(<ErrorComponent />, {
            errorReducer: { error: null },
            themeReducer: { theme: false },
        });
        expect(screen.queryByTestId('error-modal')).toBeNull();
    });

    it('should display modal with correct error message when there is an error', () => {
        renderComponentWithRedux(<ErrorComponent />, {
            errorReducer: { error: 'Test Error Message' },
            themeReducer: { theme: false },
        });
        expect(screen.getByTestId('error-modal')).toBeTruthy();
        expect(screen.getByText('Test Error Message')).toBeTruthy();
    });

    it('should close the modal and clear the error when close button is pressed', async () => {
        const store = renderComponentWithRedux(<ErrorComponent />, {
            errorReducer: { error: 'Test Error Message' },
            themeReducer: { theme: false },
        });
        fireEvent.press(screen.getByTestId('close-button'));

        expect(screen.queryByTestId('error-modal')).toBeNull();

        const { error } = store.getState().errorReducer;
        expect(error).toBeNull();
    });

    it('should close the modal and clear the error when close button is pressed', () => {
        const store = renderComponentWithRedux(<ErrorComponent />, {
            errorReducer: { error: 'Test Error Message' },
            themeReducer: { theme: false },
        });

        expect(screen.getByTestId('error-modal')).toBeTruthy();
        expect(screen.getByText('Test Error Message')).toBeTruthy();

        fireEvent.press(screen.getByTestId('close-button'));

        setImmediate(() => {
            const { error } = store.getState().errorReducer;
            expect(error).toBeNull();
        });
    });
});
