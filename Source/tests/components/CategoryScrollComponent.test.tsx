import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import { render, screen } from '@testing-library/react-native';
import CategoryScrollComponent from "../../components/CategoryScrollComponent";
import {categoryReducer} from "../../redux/reducers/categoryReducer";
import '@testing-library/jest-native/extend-expect';



jest.useFakeTimers();

const store = configureStore({
    reducer: categoryReducer,
    preloadedState: {
        categories: [{ name: 'Test Category' }] // Preload with expected state
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

const Wrapper = ({children}) => (<Provider store={store}>{children}</Provider>);

describe('<NounoursListItem />', () => {
    test('Assert displayed values', () => {
        const expectedCategoryInfos = store.getState().categories[0]

        render(<Wrapper>
            <CategoryScrollComponent category={expectedCategoryInfos.name}/>
        </Wrapper>)

        expect(screen.getByTestId('category-chip')).toHaveTextContent(expectedCategoryInfos.name);
    })
});