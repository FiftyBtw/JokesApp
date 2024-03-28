import {configureStore} from '@reduxjs/toolkit'
import {jokeReducer} from './reducers/jokeReducer'
import {categoryReducer} from "./reducers/categoryReducer";
import {errorReducer} from "./reducers/errorReducer";
import {themeReducer} from "./reducers/themeReducer";

// Reference all application reducers
const reducer = {
    jokeReducer : jokeReducer,
    categoryReducer : categoryReducer,
    errorReducer: errorReducer,
    themeReducer: themeReducer
}

// Store creation with reducers
const store = configureStore({
    // @ts-ignore
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: { warnAfter: 48 },
            serializableCheck: false
        })
});

export type AppStore = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;