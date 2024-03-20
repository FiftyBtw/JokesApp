import {SafeAreaView} from "react-native";
import { StatusBar } from 'expo-status-bar';
import Navigation from "../navigation/navigation";
import ErrorComponent from "../components/ErrorComponent";
import {DarkTheme, LightTheme} from "../assets/Theme";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hook";
import {StyleSheet} from 'react-native';
import {useEffect} from "react";
import {getTheme} from "../redux/thunks/themeThunk";


export default function MainComponent() {
    const appTheme = useAppSelector(state => state.themeReducer.theme);
    const dispatch = useAppDispatch();
    const currentTheme = appTheme ? DarkTheme : LightTheme;
    const styles = useDynamicStyles(appTheme);
    useEffect(() => {
        dispatch(getTheme());
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style={currentTheme.colors.status_bar === 'light' ? 'light' : 'dark'} />
            <Navigation/>
            <ErrorComponent/>
        </SafeAreaView>
    );
}

const useDynamicStyles = (appTheme: boolean) => {
    const currentTheme = appTheme ? DarkTheme : LightTheme;
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: currentTheme.colors.primary,
        }
    });
}