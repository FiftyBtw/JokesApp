import {SampleJoke} from "../../model/SampleJoke";
import {
    setFavoriteJoke,
    setCustomJoke,
    setJokesList,
    setLastJokesList,
    setSelectedJoke
} from "../actions/jokeActions";
import {setError} from "../actions/errorActions";
import {CustomJoke} from "../../model/CustomJoke";
import {Joke} from "../../model/Joke";
import AsyncStorage from "@react-native-async-storage/async-storage";


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
            dispatch(getLastJokes())
            dispatch(getCustomJokes())
        } catch (error) {
            dispatch(setError(error.message));
        }
    };
};


export const deleteJoke = (joke: CustomJoke) => {
    return async dispatch => {
        try {
            const response = await fetch(`https://iut-weather-api.azurewebsites.net/jokes/${joke.id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Error while deleting joke');
            }
            dispatch(removeFavoriteJoke(joke))
            dispatch(getLastJokes())
            dispatch(getCustomJokes())
        } catch (error) {
            dispatch(setError(error.message));
        }
    };
};

export const addFavoriteJoke = (joke: Joke) => {
    return async dispatch => {
        try {
            const favoriteJokes = await AsyncStorage.getItem('favorites');
            const favoriteJokesList = favoriteJokes != null ? JSON.parse(favoriteJokes) : [];
            favoriteJokesList.push(joke);
            await AsyncStorage.setItem('favorites', JSON.stringify(favoriteJokesList));
            const favorites = favoriteJokesList.map(joke => new SampleJoke(joke["type"], joke["setup"], joke["punchline"], joke["image"], joke["id"]))
            dispatch(setFavoriteJoke(favorites));
        } catch (error) {
            dispatch(setError(error.message));
        }
    };
};

export const removeFavoriteJoke = (joke: SampleJoke | CustomJoke) => {
    return async dispatch => {
        try {
            let favorites : SampleJoke[] | CustomJoke[] = [];
            const favoriteJokes = await AsyncStorage.getItem('favorites');
            const favoriteJokesList = favoriteJokes != null ? JSON.parse(favoriteJokes) : [];
            for (joke of favoriteJokesList) {
                if (typeof joke.id === "number") {
                    favorites = favoriteJokesList.map(joke => new SampleJoke(joke["type"], joke["setup"], joke["punchline"], joke["image"], joke["id"]))
                }
                else {
                    if (typeof joke.id === "string") {
                        favorites = favoriteJokesList.map(joke => new CustomJoke(joke["type"], joke["setup"], joke["punchline"], joke["image"], joke["id"]))
                    }
                }
            }
            const newFavoriteJokesList = favorites.filter(j => j.id !== joke.id);
            await AsyncStorage.setItem('favorites', JSON.stringify(newFavoriteJokesList));
            dispatch(setFavoriteJoke(newFavoriteJokesList));
        } catch (error) {
            dispatch(setError(error.message));
        }
    };
};

export const getFavoriteJokes = () => {
    return async dispatch => {
        try {
            const favoriteJokes = await AsyncStorage.getItem('favorites');
            let favoriteJokesList = favoriteJokes != null ? JSON.parse(favoriteJokes) : [];
            favoriteJokesList = favoriteJokesList.filter(joke => joke.id !== undefined);
            await AsyncStorage.setItem('favorites', JSON.stringify(favoriteJokesList));
            const favorites = favoriteJokesList.map(joke => new SampleJoke(joke["type"], joke["setup"], joke["punchline"], joke["image"], joke["id"]))
            dispatch(setFavoriteJoke(favorites));
        } catch (error) {
            dispatch(setError(error.message));
        }
    };
};
