import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import React, {useEffect,} from "react";
import { theme } from '../assets/Theme';
import JokeScrollItem from "../components/JokeScrollComponent";
import {SampleJoke} from "../model/SampleJoke";
import CategoryScrollComponent from "../components/CategoryScrollComponent";
import {Category} from "../model/Category";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hook";
import {getCategoriesList} from "../redux/thunks/categoryThunk";
import {getJokesList, getLastJokes} from "../redux/thunks/jokeThunk";

// Home page of the App
export default function HomeScreen({navigation}) {
    const lastJokes  = useAppSelector((state) => state.jokeReducer.lastJokes) as SampleJoke[];
    const categoryList = useAppSelector(state => state.categoryReducer.categories);

    const dispatch = useAppDispatch();

    useEffect(() => {
        return navigation.addListener('focus', () => {
            const loadJokes = async () => {
                await dispatch(getLastJokes());
            }
            loadJokes().then(r => console.log("Last Jokes loaded"))

            const loadCategories = async () => {
                await dispatch(getCategoriesList());
            }
            loadCategories().then(r => console.log("Categories loaded"))
        });
    }, [navigation]);



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
                    data={lastJokes}
                    renderItem={({ item  }) => <JokeScrollItem joke={item} />}
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
                        data={categoryList.sort((c1, c2) => c2.number - c1.number)}
                        renderItem={({ item }) => <CategoryScrollComponent category={item.name} />}
                        keyExtractor={(item: Category) => item.name}
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