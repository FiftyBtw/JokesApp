import {SampleJoke} from "../../model/SampleJoke";
import {setCustomJoke, setJokesList, setLastJokesList, setSelectedJoke} from "../actions/jokeActions";
import {setError} from "../actions/errorActions";
import {CustomJoke} from "../../model/CustomJoke";


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

export const getSelectedJoke = (idJoke: string, typeJoke: string) => {
    return async dispatch => {
        try{
            let jokePromise;

            if (typeJoke === "sample") {
                jokePromise = await fetch(`https://iut-weather-api.azurewebsites.net/jokes/samples/${idJoke}`)
            }
            if (typeJoke === "custom"){
                jokePromise = await fetch(`https://iut-weather-api.azurewebsites.net/jokes/${idJoke}`)
            }
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

export const getCustomJokes = () => {
    return async dispatch => {
        try {
            const jokePromise = await fetch('https://iut-weather-api.azurewebsites.net/jokes');
            if (!jokePromise.ok) {
                throw new Error("Error while fetching custom jokes");
            }
            const jokeJson = await jokePromise.json();
            const customJokeList = jokeJson.map(joke => new CustomJoke(joke["type"], joke["setup"], "", joke["image"], joke["id"]));
            dispatch(setCustomJoke(customJokeList));
        } catch (error) {
            dispatch(setError(error.message));
        }
    }
}


export const addJoke = (type: string, setup: string, punchline: string) => {
    return async dispatch => {
        try {
            const response = await fetch('https://iut-weather-api.azurewebsites.net/jokes', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: type,
                    setup: setup,
                    punchline: punchline,
                }),
            });

            if (!response.ok) {
                throw new Error('Error while adding joke');
            }

        } catch (error) {
            dispatch(setError(error.message));
        }
    };
};


export const deleteJoke = (id: string) => {
    return async dispatch => {
        try {
            const response = await fetch(`https://iut-weather-api.azurewebsites.net/jokes/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Error while deleting joke');
            }

        } catch (error) {
            dispatch(setError(error.message));
        }
    };
};
