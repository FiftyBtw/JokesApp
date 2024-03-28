import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {DarkTheme, LightTheme, theme} from "../assets/Theme";
import {Joke} from "../model/Joke";
import {useAppSelector} from "../hooks/redux-hook";

type JokeItemProps = {
    joke: Joke;
};

// Composant servant à afficher une joke pour une liste verticale
export const JokeListItem = React.memo(function JokeListItem(props: JokeItemProps) {
    const styles = useDynamicStyles();
    return (
        <View>
            <View style={styles.jokeItem}>
                <View style={styles.rectangle}>
                </View>
                <View style={styles.jokeImageContainer}>
                    <Image
                        style={styles.jokeImage}
                        source={{ uri: props.joke.image }}/>
                </View>
                <View style={styles.jokeDetails}>
                    <Text style={styles.jokeSummary}>{props.joke.summary()}</Text>
                    <View>
                        <View style={styles.jokeType}>
                            <Text style={styles.chip}>{props.joke.type}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
});

const useDynamicStyles = () => {
    const appTheme = useAppSelector(state => state.themeReducer.theme);
    const currentTheme = appTheme ? DarkTheme : LightTheme;
    return StyleSheet.create({

        rectangle: {
            backgroundColor: theme.colors.darksalmonColor,
            width: 10
        },
        jokeItem: {
            flexDirection: 'row',
            marginHorizontal: '5%',
            backgroundColor: currentTheme.colors.card,
            marginBottom: 10,
        },
        jokeDetails: {
            width: '60%',
            padding: 10,
            justifyContent: 'space-around',
        },
        jokeSummary: {
            color: 'white',
            marginLeft: 4
        },
        jokeType: {
            backgroundColor: currentTheme.colors.chip,
            borderRadius: 25,
            padding: 3,
            justifyContent: "center",
            alignSelf: "baseline",
            marginLeft: 4,
        },
        chip: {
            color: currentTheme.colors.title,
            padding: 5,
            marginLeft: 2,
            marginRight: 2,
        },
        jokeImageContainer: {
            width: '40%',
            height: 120,
        },
        jokeImage: {
            height: '100%',
            resizeMode: 'cover',
        }
    })
}
