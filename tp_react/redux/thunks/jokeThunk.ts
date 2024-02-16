import {SampleJoke} from "../../model/SampleJoke";
import {setJokesList, setLastJokesList} from "../actions/jokeActions";


export const getJokesList = () => {
    return async dispatch => {
        try{
            const jokePromise = await fetch('https://iut-weather-api.azurewebsites.net/jokes/samples')
            const jokeListJson = await jokePromise.json()
            const jokeList = jokeListJson.map(joke => new SampleJoke(joke["type"], joke["setup"], "", joke["image"], joke["id"]))
            dispatch(setJokesList(jokeList))
        }catch(error){
            console.log("Error : ", error)
        }
    }
}

export const getLastJokes = () => {
    return async dispatch => {
        try {
            const jokePromise = await fetch('https://iut-weather-api.azurewebsites.net/jokes/lasts')
            const jokeJson = await jokePromise.json()
            const jokeList = jokeJson.map(joke => new SampleJoke(joke["type"], joke["setup"], "", joke["image"], joke["id"]))
            dispatch(setLastJokesList(jokeList))
        } catch (error) {
            console.log("Error : ", error)
        }
    }
}