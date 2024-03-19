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
            immutableCheck: false,
            serializableCheck: false
        })
},);

export default store;