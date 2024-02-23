import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hook";
import {SampleJoke} from "../model/SampleJoke";
import {useEffect, useState} from "react";
import {getSelectedJoke} from "../redux/thunks/jokeThunk";
import {theme} from "../assets/Theme";

// Joke Details Screen
export default function JokeDetailsScreen({route}) {
    const idJoke = route.params.idJoke;
    const selectedJoke = useAppSelector(state => state.jokeReducer.selectedJoke) as SampleJoke;

    const dispatch = useAppDispatch();

    useEffect(() => {
        const loadJoke = async () => {
            await dispatch(getSelectedJoke(idJoke));
        }
        loadJoke().then(r => console.log("Joke selected"))
    }, [dispatch]);

    const [showPunchline, setShowPunchline] = useState(false);
    const togglePunchline = () => {
        setShowPunchline(!showPunchline);
    };

    const [favorite, setFavorite] = useState(false);

    const toggleFavorite = () => {
        setFavorite(!favorite);
    }

    return (
        <View style={styles.container}>
            <View style={styles.jokeDetailsContainer}>
                <Image source={{ uri: selectedJoke.image }} style={styles.image} />
                <View style={styles.textContainer}>
                    <View style={styles.chipContainer}>
                        <Text>{selectedJoke.type}</Text>
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
                {showPunchline && <Text style={styles.punchline}>{selectedJoke.punchline}</Text>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.purpleColor,
        alignItems: 'center',
    },
    jokeDetailsContainer: {
        backgroundColor: theme.colors.indigoColor,
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        width: '95%',
        marginVertical: 20,
        borderColor: theme.colors.whiteColor,
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
        backgroundColor: theme.colors.whiteColor,
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 15,
        alignSelf: 'flex-start',
        marginBottom: 25,
    },
    description: {
        color: theme.colors.purpleColor,
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
        backgroundColor: theme.colors.indigoColor,
        borderRadius: 5,
        borderColor: theme.colors.whiteColor,
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
        color: theme.colors.purpleColor,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30,
    }
});
