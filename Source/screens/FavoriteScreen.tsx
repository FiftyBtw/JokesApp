import {FlatList, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import React, {useEffect} from "react";
import {DarkTheme, LightTheme} from "../assets/Theme";
import {JokeListItem} from "../components/JokeListComponent";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hook";
import {getFavoriteJokes} from "../redux/thunks/jokeThunk";
import {AppRoute} from "../navigation/routes/AppRoute";

// Page for listing all favorite jokes
export default function FavoriteScreen({navigation}) {
    const favoriteList = useAppSelector(state => state.jokeReducer.favoritesJokes);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getFavoriteJokes());
    }, [dispatch]);
    console.log("je passe ici");
    console.log(favoriteList);

    const styles = useDynamicStyles();

    return (
        <View style={styles.container}>
            {favoriteList.length > 0 ? (
                <FlatList
                    data={favoriteList}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate(AppRoute.DETAILS, { joke: item, typeJoke: "favorite" })}>
                            <JokeListItem joke={item} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    style={{ paddingTop: 20 }}
                />
            ) : (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.noData}>Vous n'avez aucune joke favorite.</Text>
                </View>
            )}
        </View>
    );
};

const useDynamicStyles = () => {
    const appTheme = useAppSelector(state => state.themeReducer.theme);
    const currentTheme = appTheme ? DarkTheme : LightTheme;
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: currentTheme.colors.background,
        },
        noData: {
            color: currentTheme.dark ? currentTheme.colors.whiteColor : currentTheme.colors.textSecondary,
            fontSize: 20,
        },
    });
};
