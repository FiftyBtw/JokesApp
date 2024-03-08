import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SampleJoke } from '../model/SampleJoke';
import JokeListItem from "../components/JokeListComponent";
import { theme } from "../assets/Theme";
import { getCustomJokes, getJokesList } from "../redux/thunks/jokeThunk";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hook";
import { AppRoute } from "../navigation/routes/AppRoute";
import { CustomJoke } from "../model/CustomJoke";

export default function CataloguePage({ navigation }) {
    const sampleJokes = useAppSelector(state => state.jokeReducer.sampleJokes) as SampleJoke[];
    const customJokes = useAppSelector(state => state.jokeReducer.customJokes) as CustomJoke[];

    const dispatch = useAppDispatch();

    useEffect(() => {
        return navigation.addListener('focus', () => {
            const loadSampleJokes = async () => {
                await dispatch(getJokesList());
            }
            loadSampleJokes().then(r => console.log("SampleJokes loaded"))
        });
    }, [navigation]);

    useEffect(() => {
        return navigation.addListener('focus', () => {
            const loadCustomJokes = async () => {
                await dispatch(getCustomJokes());
            }
            loadCustomJokes().then(r => console.log("CustomJokes loaded"))
        });
    }, [navigation]);

    const [showSample, setShowSample] = useState(true);
    const togglePunchline = () => {
        setShowSample(!showSample);
    };

    const dataToShow = showSample ? sampleJokes : customJokes;

    return (
        <View style={styles.container}>
            <View style={styles.sampleContainer}>
                <Text style={styles.sampleText}>Afficher les exemples</Text>
                <TouchableOpacity style={styles.sampleButton} onPress={togglePunchline}>
                    <Image
                        source={showSample ? require('../assets/eye_off_icon.png') : require('../assets/eye_icon.png')}
                        style={styles.eyeIcon}
                    />
                </TouchableOpacity>
            </View>
            {showSample ? (
                <FlatList
                    data={sampleJokes}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate(AppRoute.DETAILS, { "idJoke": item.id, "typeJoke": showSample ? "sample" : "custom" })}>
                            <JokeListItem joke={item} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <FlatList
                    data={customJokes}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate(AppRoute.DETAILS, { "idJoke": item.id, "typeJoke": showSample ? "sample" : "custom" })}>
                            <JokeListItem joke={item} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                />
            )}
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
    },
    eyeIcon: {
        width: 20,
        height: 20,
        tintColor: theme.colors.whiteColor
    },
    sampleButton: {
        backgroundColor: theme.colors.darksalmonColor,
        borderRadius: 5,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sampleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: "5%",
        marginVertical: 10,
    },
    sampleText: {
        fontSize: 20,
        color: theme.colors.whiteColor,
        fontWeight: 'bold',
    }
});
