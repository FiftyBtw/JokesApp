import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SampleJoke } from '../model/SampleJoke';
import {JokeStub} from "../model/JokeStub";
import JokeListItem from "../components/JokeListComponent";

const SAMPLE_JOKES : SampleJoke[] = JokeStub.sampleJokeStub();

// Catalogue des SampleJoke
export default function CataloguePage(){
    return (
        <View style={styles.container}>
            <View style={styles.centered}>
                <Text style={styles.title}>Catalogue</Text>
            </View>
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
        backgroundColor: 'rgb(74,74,102)',
    },

    centered: {
        alignItems: 'center',
        backgroundColor: 'rgb(14,14,42)',
        padding: 10
    },

    title: {
        fontSize: 24,
        color: 'darksalmon',
        fontWeight: 'bold',
    }
});
