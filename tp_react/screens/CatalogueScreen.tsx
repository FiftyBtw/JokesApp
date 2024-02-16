import React, {useEffect} from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { SampleJoke } from '../model/SampleJoke';
import {JokeStub} from "../model/JokeStub";
import JokeListItem from "../components/JokeListComponent";
import { theme } from "../assets/Theme";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "../redux/store";
import {getJokesList} from "../redux/thunks/jokeThunk";

const SAMPLE_JOKES : SampleJoke[] = JokeStub.sampleJokeStub();

// List of SampleJoke
export default function CataloguePage(){
    // @ts-ignore
    const jokesList = useSelector(state => state.jokeReducer.jokes) as SampleJoke[];

    const dispatch = useDispatch<Dispatch>();
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
                keyExtractor={(item) => item.id.toString()}
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
