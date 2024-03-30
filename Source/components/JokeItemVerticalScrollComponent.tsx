import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {SampleJoke} from "../model/SampleJoke";
import {DarkTheme, LightTheme} from "../assets/Theme";
import {useAppSelector} from "../hooks/redux-hook";

type JokeItemProps = {
    joke: SampleJoke;
};

// Component to display a joke for a vertical list
export default function JokeItemVerticalScrollComponent(props: JokeItemProps) {
    const styles = useDynamicStyles();
    return (
        <View style={{paddingLeft: 10}}>
            <View style={styles.jokeItem}>
                <View style={styles.rectangle}></View>
                <Image
                    style={styles.jokeImage}
                    source={{uri: props.joke.image}}
                    testID="jokeImage-scroll"/>
                <View style={styles.jokeDetails}>
                    <Text style={styles.jokeSummary} testID="jokeSummary-scroll">
                        {props.joke.summary()}
                    </Text>
                </View>
            </View>
        </View>
    )
}
const useDynamicStyles = () => {
    const appTheme = useAppSelector(state => state.themeReducer.theme);
    const currentTheme = appTheme ? DarkTheme : LightTheme;
    return StyleSheet.create({

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
            backgroundColor: currentTheme.colors.card,
            margin: 10,
            height: 190,
            width: 210,
            borderRadius: 5,

        },
        jokeDetails: {
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
            width: '60%',
            height: 90,
            position: 'absolute',
            margin: 5,
            resizeMode: 'cover'
        }
    })
}