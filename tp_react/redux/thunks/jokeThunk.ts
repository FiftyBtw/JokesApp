import {SampleJoke} from "../../model/SampleJoke";
import {setJokesList, setLastJokesList, setSelectedJoke} from "../actions/jokeActions";
import {setError} from "../actions/errorActions";


export const getJokesList = () => {
    return async dispatch => {
        try{
            const jokePromise = await fetch('https://iut-weather-api.azurewebsites.net/jokes/samples')
            if (!jokePromise.ok) {
                throw new Error("Error while fetching jokes")
            }
            const jokeListJson = await jokePromise.json()
            const jokeList = jokeListJson.map(joke => new SampleJoke(joke["type"], joke["setup"], "", joke["image"], joke["id"]))
            dispatch(setJokesList(jokeList))
        }catch(error){
            dispatch(setError(error.message))
        }
    }
}

export const getLastJokes = () => {
    return async dispatch => {
        try {
            const jokePromise = await fetch('https://iut-weather-api.azurewebsites.net/jokes/lasts/')
            if (!jokePromise.ok) {
                throw new Error("Error while fetching last jokes")
            }
            const jokeJson = await jokePromise.json()
            const jokeList = jokeJson.map(joke => new SampleJoke(joke["type"], joke["setup"], "", joke["image"], joke["id"]))
            dispatch(setLastJokesList(jokeList))
        } catch (error) {
            dispatch(setError(error.message))
        }
    }
}

export const getSelectedJoke = (idJoke : string) => {
    return async dispatch => {
        try{
            const jokePromise = await fetch(`https://iut-weather-api.azurewebsites.net/jokes/samples/${idJoke}`)
            if (!jokePromise.ok) {
                throw new Error("Error while fetching selected joke")
            }
            const jokeJson = await jokePromise.json()
            dispatch(setSelectedJoke(jokeJson))
        } catch (error) {
            dispatch(setError(error.message))
        }
    }
}