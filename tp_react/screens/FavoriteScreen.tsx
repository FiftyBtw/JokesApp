import {FlatList, StyleSheet, View} from "react-native";
import React, {useEffect} from "react";
import {theme} from "../assets/Theme";
import JokeListItem from "../components/JokeListComponent";
import {SampleJoke} from "../model/SampleJoke";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hook";
import {getJokesList} from "../redux/thunks/jokeThunk";

// Page for listing all favorite joke
export default function FavoriteScreen() {
    const jokesList = useAppSelector(state => state.jokeReducer.sampleJokes) as SampleJoke[];

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

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: theme.colors.purpleColor,
    },

    centered: {
        alignItems: 'center',
        backgroundColor: theme.colors.indigoColor,
        padding: 10
    },

    title: {
        fontSize: 24,
        color: theme.colors.darksalmonColor,
        fontWeight: 'bold',
    }
});