import React, {useLayoutEffect} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SampleJoke } from '../model/SampleJoke';
import {JokeStub} from "../model/JokeStub";
import JokeListItem from "../components/JokeListComponent";
import { theme } from "../assets/Theme";
import {useNavigation} from "@react-navigation/native";

const SAMPLE_JOKES : SampleJoke[] = JokeStub.sampleJokeStub();

// List of SampleJoke
export default function CataloguePage(){
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
