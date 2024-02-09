import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {SampleJoke} from "../model/SampleJoke";
import {theme} from "../assets/Theme";

type JokeItemProps = {
    joke: SampleJoke;
};

// Composant servant à afficher une joke pour une liste Horizontale
export default function JokeListItem(props: JokeItemProps) {
    return (
        <View style={{paddingLeft: 10}}>
            <View style={styles.jokeItem}>
                <View style={styles.rectangle}></View>
                <Image
                    style={styles.jokeImage}
                    source={{uri: props.joke.image}}/>
                <View style={styles.jokeDetails}>
                    <Text style={styles.jokeSummary}>{props.joke.summary()}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    rectangle: {
        borderRadius: 4,
        flexShrink: 0,
        width: "100%",
        height: "20%",
        backgroundColor: 'darksalmon',
    },
    jokeItem: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.colors.indigoColor,
        margin: 10,
        height: 200,
        width: 240,
        borderRadius: 5,

    },
    jokeDetails :{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    jokeSummary: {
        textAlign: 'center',
        color: "white",
    },
    jokeImage: {
        width: '70%',
        height: 110,
        position: 'absolute',
        margin: 5,
    }
});