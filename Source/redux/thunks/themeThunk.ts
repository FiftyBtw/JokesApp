import AsyncStorage from "@react-native-async-storage/async-storage";
import {switchTheme} from "../actions/themeAction";
import {useTheme} from "@react-navigation/native";

export const storeTheme = (theme: boolean) => {
    return async dispatch => {
        try {
            dispatch(switchTheme(theme))
            const jsonTheme = JSON.stringify(theme)
            await AsyncStorage.setItem('theme', jsonTheme);
        } catch (e) {
            console.log("An error occurred", e);
        }
    }
}

export const getTheme = () => {
    return async dispatch => {
        try {
            const jsonTheme = await AsyncStorage.getItem('theme');
            return jsonTheme != null ? JSON.parse(jsonTheme) : useTheme().dark;
        } catch (e) {
            console.log("An error occurred", e);
        }
    }
}