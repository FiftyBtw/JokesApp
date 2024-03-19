import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import JokeListItem from "../components/JokeListComponent";
import {DarkTheme, LightTheme, theme} from "../assets/Theme";
import {getCustomJokes, getJokesList} from "../redux/thunks/jokeThunk";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hook";
import {AppRoute} from "../navigation/routes/AppRoute";

export default function CataloguePage({ navigation }) {
    const dispatch = useAppDispatch();
    const sampleJokes = useAppSelector(state => state.jokeReducer.sampleJokes);
    const customJokes = useAppSelector(state => state.jokeReducer.customJokes);
    const styles = useDynamicStyles();

    useEffect(() => {
        return navigation.addListener('focus', () => {
            dispatch(getJokesList());
            dispatch(getCustomJokes());
        });
    }, [navigation, dispatch]);

    const [showSample, setShowSample] = useState(true);
    const togglePunchline = () => setShowSample(!showSample);

    const dataToShow = showSample ? sampleJokes : customJokes;
    const typeJoke = showSample ? "sample" : "custom";

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
            <FlatList
                data={dataToShow}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate(AppRoute.DETAILS, { idJoke: item.id, typeJoke })}>
                        <JokeListItem joke={item} />
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
                getItemLayout={(data, index) =>
                    ({ length: 100, offset: 100 * index, index })
                }
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
        color: currentTheme.colors.title,
        fontWeight: 'bold',
    },
    eyeIcon: {
        width: 20,
        height: 20,
        tintColor: theme.colors.whiteColor
    },
})
}
