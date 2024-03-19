import {View, Text, Switch, StyleSheet, Image} from "react-native";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hook";
import {DarkTheme, LightTheme, theme} from "../assets/Theme";
import {storeTheme} from "../redux/thunks/themeThunk";
import {useTheme} from "@react-navigation/native";

// Settings page
export default function SettingsScreen() {
    const appTheme = useAppSelector(state => state.themeReducer.theme);
    const styles = useDynamicStyles();

    const dispatch = useAppDispatch()
    //<Image source={require('../assets/moon_icon.png')} style={{width: 30, height: 30}}/>
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Réglages</Text>
            <View style={styles.switchContainer}>
                <View>
                    <Text style={styles.switchLabel}>Dark Mode</Text>
                </View>
                <Switch
                    value={appTheme}
                    trackColor={{ true: theme.colors.darksalmonColor}}
                    onValueChange={() => {
                        dispatch(storeTheme(!appTheme))
                    }}
                />
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
            paddingHorizontal: 20,
            backgroundColor: currentTheme.colors.background
        },
        title: {
            fontSize: 22,
            fontWeight: 'bold',
            color: currentTheme.colors.title,
            marginTop: 10,
            marginBottom: 20,
        },
        switchContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderWidth: 1,
            backgroundColor: currentTheme.colors.primary,
            padding: 10,
            borderRadius: 10,
            marginVertical: 5
        },
        switchLabel: {
            fontSize: 18,
            color: currentTheme.colors.title,
        },
    })
};