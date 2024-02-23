import React, {useEffect} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SampleJoke} from '../model/SampleJoke';
import JokeListItem from "../components/JokeListComponent";
import {theme} from "../assets/Theme";
import {getJokesList} from "../redux/thunks/jokeThunk";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hook";
import {AppRoute} from "../navigation/routes/AppRoute";

// List of SampleJoke
export default function CataloguePage({navigation}){
    const jokesList = useAppSelector(state => state.jokeReducer.jokes) as SampleJoke[];

    const dispatch = useAppDispatch();
    useEffect(() => {
        return navigation.addListener('focus', () => {
            const loadJokes = async () => {
                await dispatch(getJokesList());
            }
            loadJokes().then(r => console.log("Jokes loaded"))
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <FlatList
                data={jokesList}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => navigation.navigate(AppRoute.DETAILS, {"idJoke": item.id})}>
                        <JokeListItem joke={item}/>
                    </TouchableOpacity>
            } keyExtractor={(item) => item.id.toString()}
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
