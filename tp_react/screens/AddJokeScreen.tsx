import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Keyboard, TouchableWithoutFeedback,
} from "react-native";
import {DarkTheme, LightTheme, theme} from "../assets/Theme";
import { addJoke } from "../redux/thunks/jokeThunk";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hook";

export default function AddJokeScreen() {
    const [joke, setJoke] = useState('');
    const [jokeFall, setJokeFall] = useState('');
    const [category, setCategory] = useState('');
    const styles = useDynamicStyles();

    const dispatch = useAppDispatch();
    const handleCreateButtonPress = () => {
        if (joke.trim() !== '' && jokeFall.trim() !== '' && category.trim() !== '') {
            console.log(joke, jokeFall, category)

            if (dispatch(addJoke(category, joke, jokeFall))) {
                console.log("toto")
                handleEraseButtonPress()
            }
        }
    };

    const handleEraseButtonPress = () => {
        setJoke('');
        setJokeFall('');
        setCategory('');
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.textInputContainer}>
                    <Text style={styles.textInputTitle}>Blague</Text>
                    <TextInput
                        multiline={true}
                        style={styles.textInput}
                        value={joke}
                        onChangeText={(text) => setJoke(text)}
                    />
                </View>
                <View style={styles.textInputContainer}>
                    <Text style={styles.textInputTitle}>Chute de la blague</Text>
                    <TextInput
                        multiline={true}
                        style={styles.textInput}
                        value={jokeFall}
                        onChangeText={(text) => setJokeFall(text)}
                    />
                </View>
                <View style={styles.textInputContainer}>
                    <Text style={styles.textInputTitle}>Catégorie</Text>
                    <View style={styles.textInputWithCounter}>
                        <TextInput
                            multiline={true}
                            maxLength={10}
                            style={styles.textInputCategory}
                            value={category}
                            onChangeText={(text) => setCategory(text)}
                        />
                        <Text style={styles.characterCounter}>{category.length}/10</Text>
                    </View>
                </View>
                <View style={styles.actionContainer}>
                    <TouchableOpacity
                        style={[styles.createButton, { opacity: joke.trim() !== '' && jokeFall.trim() !== '' && category.trim() !== '' ? 1 : 0.5 }]}
                        onPress={handleCreateButtonPress}
                        disabled={joke.trim() === '' || jokeFall.trim() === '' || category.trim() === ''}
                    >
                        <Text style={styles.createTextButton}>CRÉER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.eraseButton}
                        onPress={handleEraseButtonPress}
                    >
                        <Text style={styles.eraseTextButton}>EFFACER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}


const useDynamicStyles = () => {
    const appTheme = useAppSelector(state => state.themeReducer.theme);
    const currentTheme = appTheme ? DarkTheme : LightTheme;
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: currentTheme.colors.background,
            padding: 10,
        },
        textInputContainer: {
            flex: 1,
            backgroundColor: currentTheme.colors.background,
            marginTop: 25
        },
        textInputTitle: {
            fontSize: 20,
            color: currentTheme.colors.title,
            paddingBottom: 10,
            fontWeight: 'bold',
            marginBottom: 10
        },
        textInput: {
            height: 80,
            backgroundColor: currentTheme.colors.card,
            color: currentTheme.colors.text,
            paddingHorizontal: 20,
            paddingTop: 10
        },
        textInputCategory: {
            flex: 1,
            height: 50,
            backgroundColor: currentTheme.colors.card,
            color: currentTheme.colors.text,
            paddingHorizontal: 20,
            paddingTop: 5,
        },
        createButton: {
            backgroundColor: theme.colors.darksalmonColor,
            padding: 10,
            borderRadius: 5,
            marginBottom: 20,
        },
        eraseButton: {
            backgroundColor: theme.colors.whiteColor,
            color: theme.colors.darksalmonColor,
            padding: 10,
            borderRadius: 5,
        },
        createTextButton: {
            color: theme.colors.whiteColor,
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingVertical: 2,
        },
        eraseTextButton: {
            color: theme.colors.darksalmonColor,
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingVertical: 2,
        },
        actionContainer: {
            justifyContent: "space-between",
            marginBottom: 50,
        },
        textInputWithCounter: {
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
        },
        characterCounter: {
            color: theme.colors.whiteColor,
            fontSize: 12,
            position: 'absolute',
            bottom: 5,
            right: 5,
        },
    })
}