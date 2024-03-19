import {CategoryFactory} from "../../model/CategoryFactory";
import {setCategoriesList} from "../actions/categoryActions";
import {setError} from "../actions/errorActions";


export const getCategoriesList = () => {
    return async dispatch => {
        try{
            const categoryPromise = await fetch('https://iut-weather-api.azurewebsites.net/jokes/categories/top')
            if (!categoryPromise.ok) {
                throw new Error("Error while fetching top categories")
            }
            const categoryListJson = await categoryPromise.json()
            dispatch(setCategoriesList(CategoryFactory.createCategory(categoryListJson)))
        }catch(error){
            dispatch(setError(error.message))
        }
    }
}