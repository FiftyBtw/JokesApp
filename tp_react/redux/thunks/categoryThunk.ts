import {CategoryFactory} from "../../model/CategoryFactory";
import {setCategoriesList} from "../actions/categoryActions";


export const getCategoriesList = () => {
    return async dispatch => {
        try{
            const categoryPromise = await fetch('https://iut-weather-api.azurewebsites.net/jokes/categories/top')
            const categoryListJson = await categoryPromise.json()
            dispatch(setCategoriesList(CategoryFactory.createCategory(categoryListJson)))
        }catch(error){
            console.log("Error : ", error)
        }
    }
}