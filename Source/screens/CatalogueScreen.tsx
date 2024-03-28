import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {JokeListItem} from '../components/JokeListComponent';
import {DarkTheme, LightTheme, theme} from "../assets/Theme";
import {getCustomJokes, getJokesList} from "../redux/thunks/jokeThunk";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hook";
import {AppRoute} from "../navigation/routes/AppRoute";
import {clearSelectedJoke} from "../redux/actions/jokeActions";

export default function CataloguePage({ navigation }) {
    const dispatch = useAppDispatch();
    const sampleJokes = useAppSelector(state => state.jokeReducer.sampleJokes);
    const customJokes = useAppSelector(state => state.jokeReducer.customJokes);
    const error = useAppSelector(state => state.errorReducer.error)
    const styles = useDynamicStyles();
    const [showSample, setShowSample] = useState(true);

    useEffect(() => {
        showSample ? dispatch(getJokesList()) : dispatch(getCustomJokes());
        navigation.addListener('focus', () => {
            dispatch(clearSelectedJoke());
        });
    }, [dispatch, showSample, error, navigation]);

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
            {dataToShow.length > 0 ? (
                <FlatList
                    data={dataToShow}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate(AppRoute.DETAILS, { joke: item, typeJoke })}>
                            <JokeListItem joke={item} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    getItemLayout={(data, index) => (
                        { length: 100, offset: 100 * index, index }
                    )}
                    initialNumToRender={6}
                    maxToRenderPerBatch={6}
                />
            ) : (
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.noData}>Aucune {typeJoke} joke trouvée</Text>
                </View>
            )}
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
    noData: {
        textAlign: 'center',
        color: currentTheme.dark ? currentTheme.colors.whiteColor : currentTheme.colors.textSecondary,
        fontSize: 20,
        marginTop: 20,
    },
})
}
