import {configureStore} from '@reduxjs/toolkit'
import {jokeReducer} from './reducers/jokeReducer'
import {categoryReducer} from "./reducers/categoryReducer";

// Reference all application reducers
const reducer = {
    jokeReducer : jokeReducer,
    categoryReducer : categoryReducer
}


// @ts-ignore
const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
},);


export type AppStore = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;