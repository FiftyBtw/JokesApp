import {FlatList, StyleSheet, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import React, {useLayoutEffect} from "react";
import {theme} from "../assets/Theme";
import JokeListItem from "../components/JokeListComponent";
import {SampleJoke} from "../model/SampleJoke";
import {JokeStub} from "../model/JokeStub";

const SAMPLE_JOKES : SampleJoke[] = JokeStub.sampleJokeStub();

// Page for listing all favorite joke
export default function FavoriteScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                data={SAMPLE_JOKES}
                renderItem={({ item }) => <JokeListItem joke={item} />}
                keyExtractor={(item) => item.id.toString()}
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