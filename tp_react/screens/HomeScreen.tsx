import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useMemo,} from "react";
import { theme, LightTheme, DarkTheme } from '../assets/Theme';
import JokeScrollItem from "../components/JokeScrollComponent";
import CategoryScrollComponent from "../components/CategoryScrollComponent";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hook";
import {getCategoriesList} from "../redux/thunks/categoryThunk";
import {getLastJokes} from "../redux/thunks/jokeThunk";
import {useTheme} from "@react-navigation/native";

// Home page of the App
export default function HomeScreen({navigation}) {
    const lastJokes  = useAppSelector((state) => state.jokeReducer.lastJokes);
    const categoryList = useAppSelector(state => state.categoryReducer.categories);
    const styles = useDynamicStyles();

    const dispatch = useAppDispatch();

    useEffect(() => {
        return navigation.addListener('focus', () => {
            dispatch(getLastJokes());
            dispatch(getCategoriesList());
        });
    }, [navigation, dispatch]);

    const sortedCategories = useMemo(() => {
        return [...categoryList].sort((c1, c2) => c2.number - c1.number);
    }, [categoryList]);

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
                        data={sortedCategories}
                        renderItem={({ item }) => <CategoryScrollComponent category={item.name} />}
                        keyExtractor={(item) => item.name}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>

        </View>
    );
};

const useDynamicStyles = () => {
    const appTheme = useAppSelector(state => state.themeReducer.theme);
    const currentTheme = appTheme ? DarkTheme : LightTheme;
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: currentTheme.colors.background
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
            color: currentTheme.colors.title,
            fontWeight: 'bold',
            paddingLeft: 15
        },
        categoryContainer: {
            marginTop: 25,
        }
    })
}