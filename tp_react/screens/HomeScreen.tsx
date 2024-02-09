import {FlatList, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import React, {useLayoutEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import { theme } from '../assets/Theme';
import JokeScrollItem from "../components/JokeScrollComponent";
import {SampleJoke} from "../model/SampleJoke";
import {JokeStub} from "../model/JokeStub";
import JokeListItem from "../components/JokeListComponent";
import CategoryScrollComponent from "../components/CategoryScrollComponent";

// List of all jokes
const SAMPLE_JOKES : SampleJoke[] = JokeStub.sampleJokeStub();

// List of all categories
const uniqueCategories = Array.from(new Set(SAMPLE_JOKES.map(joke => joke.type)));
const uniqueCategoriesData = uniqueCategories.map((category, index) => ({
    id: index,
    category: category
}));


// Home page of the App
export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.centered}>
                <Image
                    style={{width: 150, height: 150}}
                    source={require('../assets/logo.png')}
                />
                <Text style={styles.appName}>Chat C'est Drôle</Text>
            </View>

            <View>
                <Text style={styles.titleCategories}> Dernières blagues</Text>
                <FlatList
                    horizontal={true}
                    data={SAMPLE_JOKES.reverse().slice(0, 3)}
                    renderItem={({ item }) => <JokeScrollItem joke={item} />}
                    keyExtractor={(item) => item.id.toString()}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={{paddingTop: 15}}>
                <View style={{ flexDirection: 'row'}}>
                    <Text style={styles.titleCategories}>Top Categories</Text>
                    <Image
                        source={require('../assets/fire_icon.png')}
                    />
                </View>
                <View style={styles.categoryContainer}>
                    <FlatList
                        horizontal={true}
                        data={uniqueCategoriesData}
                        renderItem={({ item }) => <CategoryScrollComponent category={item.category} />}
                        keyExtractor={(item) => item.id.toString()}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>

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
        paddingBottom: 60,
    },
    appName: {
        fontSize: 24,
        color: theme.colors.darksalmonColor,
        fontWeight: 'bold',
    },
    titleCategories: {
        fontSize: 20,
        color: theme.colors.whiteColor,
        fontWeight: 'bold',
        paddingLeft: 15
    },
    categoryContainer: {
        marginTop: 25,
    }
});