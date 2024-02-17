import {configureStore} from '@reduxjs/toolkit'
import {jokeReducer} from './reducers/jokeReducer'
import {categoryReducer} from "./reducers/categoryReducer";

// Reference all application reducers
const reducer = {
    jokeReducer : jokeReducer,
    categoryReducer : categoryReducer
}

// Store creation with reducers
// @ts-ignore
const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
},);

export default store;