import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hook";
import {useEffect, useState} from "react";
import {
    addFavoriteJoke,
    deleteJoke, getFavoriteJokes,
    getSelectedJoke,
    removeFavoriteJoke
} from "../redux/thunks/jokeThunk";
import {DarkTheme, LightTheme, theme} from "../assets/Theme";

// Joke Details Screen
export default function JokeDetailsScreen({route, navigation}) {
    const styles = useDynamicStyles();
    const dispatch = useAppDispatch();
    const typeJoke = route.params.typeJoke;
    const idJoke = route.params.joke.id;
    let selectedJoke = route.params.joke;
    const favoriteJokes = useAppSelector(state => state.jokeReducer.favoritesJokes);

    const [favorite, setFavorite] = useState(false);

    if (typeJoke !== "favorite") {
        selectedJoke = useAppSelector(state => state.jokeReducer.selectedJoke);

        useEffect(() => {
            dispatch(getSelectedJoke(idJoke, typeJoke));
        }, [navigation, dispatch]);
    }

    useEffect(() => {
        dispatch(getFavoriteJokes());
        if (favoriteJokes.length > 0) {
            setFavorite(favoriteJokes.some(joke => joke.id === idJoke));
        }
    }, [navigation, dispatch]);

    const [showPunchline, setShowPunchline] = useState(false);
    const togglePunchline = () => {
        setShowPunchline(!showPunchline);
    };

    const toggleFavorite = () => {
        if (selectedJoke) {
            console.log(selectedJoke, favorite);
            if (favorite) {
                dispatch(removeFavoriteJoke(selectedJoke));
            } else {
                dispatch(addFavoriteJoke(selectedJoke));
                console.log(favoriteJokes);
            }
            setFavorite(!favorite);
        }
    }

    const deleteJokeCustom = () => {
        try {
            dispatch(deleteJoke(selectedJoke));
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.jokeDetailsContainer}>
                {selectedJoke && (
                    <>
                        {typeJoke == "custom" && (
                            <TouchableOpacity style={styles.deleteButton} onPress={deleteJokeCustom}>
                                <Text style={styles.deleteButtonText}>X</Text>
                            </TouchableOpacity>
                        )}
                        <Image source={{uri:selectedJoke.image}} style={styles.image} />
                        <View style={styles.textContainer}>
                            <View style={styles.chipContainer}>
                                <Text style={styles.chipText}>{selectedJoke.type}</Text>
                            </View>
                            <Text style={styles.description}>{selectedJoke.setup}</Text>
                        </View>
                        <View style={styles.actionContainer}>
                            <TouchableOpacity style={styles.favoriteButton} onPress={toggleFavorite}>
                                <Image
                                    source={favorite ? require('../assets/plain_favorite_icon.png') : require('../assets/favorite_icon.png')}
                                    style={styles.favoriteImage}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.chuteButton} onPress={togglePunchline}>
                                <Image
                                    source={showPunchline ? require('../assets/eye_off_icon.png') : require('../assets/eye_icon.png')}
                                    style={styles.eyeIcon}
                                />
                                <Text style={styles.chuteButtonText}>LA CHUTE</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
                {showPunchline && <Text style={styles.punchline}>{selectedJoke?.punchline}</Text>}
            </View>
        </View>
    );
}

const useDynamicStyles = () => {
    const appTheme = useAppSelector(state => state.themeReducer.theme);
    const currentTheme = appTheme ? DarkTheme : LightTheme;
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: currentTheme.colors.background,
            alignItems: 'center',
        },
        jokeDetailsContainer: {
            backgroundColor: currentTheme.colors.cardSecondary,
            padding: 20,
            borderRadius: 20,
            alignItems: 'center',
            width: '95%',
            marginVertical: 20,
            borderColor: currentTheme.colors.border,
            borderWidth: 1,
        },
        image: {
            width: '100%',
            height: 200,
            borderRadius: 10,
            marginBottom: 25,
            resizeMode: "cover"
        },
        textContainer: {
            width: '100%',
            alignItems: 'flex-start',
            marginBottom: 20,
        },
        chipContainer: {
            backgroundColor: currentTheme.colors.chipSecondary,
            borderRadius: 20,
            paddingVertical: 5,
            paddingHorizontal: 15,
            alignSelf: 'flex-start',
            marginBottom: 25,
        },
        chipText: {
            color: currentTheme.colors.background,
            fontWeight: 'bold',
        },
        description: {
            color: currentTheme.colors.textSecondary,
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 10,
        },
        actionContainer: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '100%',
        },
        favoriteButton: {
            backgroundColor: currentTheme.colors.primary,
            borderRadius: 5,
            borderColor: currentTheme.colors.border,
            borderWidth: 1,
            justifyContent: 'center',
            paddingHorizontal: 25,
            marginRight: 20,
        },
        favoriteImage: {
            width: 30,
            height: 30,
            tintColor: theme.colors.darksalmonColor,
        },
        chuteButton: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: theme.colors.darksalmonColor,
            borderRadius: 5,
            paddingVertical: 10,
            paddingHorizontal: 20,
            width: "auto"
        },
        chuteButtonText: {
            color: theme.colors.whiteColor,
            marginLeft: 10,
            fontWeight: 'bold',
        },
        eyeIcon: {
            width: 24,
            height: 24,
            tintColor: theme.colors.whiteColor,
        },
        punchline: {
            alignSelf: 'flex-start',
            color: currentTheme.colors.textSecondary,
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 30,
        },
        deleteButton: {
            position: 'absolute',
            top: -7,
            right: -7,
            backgroundColor: theme.colors.darksalmonColor,
            borderRadius: 15,
            width: 30,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
        },
        deleteButtonText: {
            color: theme.colors.whiteColor,
            fontSize: 16,
            fontWeight: 'bold',
        },
    })
}
