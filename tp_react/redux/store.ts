import {configureStore} from '@reduxjs/toolkit'
import {jokeReducer} from './reducers/jokeReducer'
import {categoryReducer} from "./reducers/categoryReducer";
import {errorReducer} from "./reducers/errorReducer";

// Reference all application reducers
const reducer = {
    jokeReducer : jokeReducer,
    categoryReducer : categoryReducer,
    errorReducer: errorReducer
}

// Store creation with reducers
const store = configureStore({
    // @ts-ignore
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
},);

export default store;