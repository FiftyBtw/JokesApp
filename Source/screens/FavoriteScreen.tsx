import {FlatList, StyleSheet, View} from "react-native";
import React, {useEffect} from "react";
import {DarkTheme, LightTheme} from "../assets/Theme";
import JokeListItem from "../components/JokeListComponent";
import {SampleJoke} from "../model/SampleJoke";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hook";
import {getJokesList} from "../redux/thunks/jokeThunk";

// Page for listing all favorite joke
export default function FavoriteScreen() {
    const jokesList = useAppSelector(state => state.jokeReducer.sampleJokes) as SampleJoke[];
    const styles = useDynamicStyles();

    const dispatch = useAppDispatch();
    useEffect(() => {
        const loadJokes = async () => {
            await dispatch(getJokesList());
        }
        loadJokes().then(r => console.log("Jokes loaded"))
    }, [dispatch]);
    return (
        <View style={styles.container}>
            <FlatList
                data={jokesList}
                renderItem={({ item }) => <JokeListItem joke={item} />}
                keyExtractor={(item: SampleJoke) => (item.id.toString())}
            />
        </View>
    );
};


const useDynamicStyles = () => {
    const appTheme = useAppSelector(state => state.themeReducer.theme);
    const currentTheme = appTheme ? DarkTheme : LightTheme;
    return StyleSheet.create({

        container: {
            flex: 1,
            backgroundColor: currentTheme.colors.background,
        }
    })
}