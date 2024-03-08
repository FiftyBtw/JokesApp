import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {SampleJoke} from "../model/SampleJoke";
import {theme} from "../assets/Theme";
import {Joke} from "../model/Joke";

type JokeItemProps = {
    joke: Joke;
};

// Composant servant à afficher une joke pour une liste verticale
export default function JokeListItem(props: JokeItemProps) {
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
}

const styles = StyleSheet.create({

    rectangle: {
        backgroundColor: theme.colors.darksalmonColor,
        width: 10
    },
    jokeItem: {
        flexDirection: 'row',
        marginHorizontal: '5%',
        backgroundColor: theme.colors.indigoColor,
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
        backgroundColor: theme.colors.greyColor,
        borderRadius : 25,
        padding: 3,
        justifyContent: "center",
        alignSelf: "baseline",
        marginLeft: 4
    },
    chip: {
        color: '#fff',
        padding: 5,
        marginLeft: 2,
        marginRight: 2
    },
    jokeImageContainer: {
        width: '40%',
    },
    jokeImage: {
        width: '100%',
        height: 120,
    }
});
