import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from "../screens/SettingsScreen";
import AddJokeScreen from "../screens/AddJokeScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import JokeNavigator from "./JokeNavigator";
import {Image, StyleSheet, View} from "react-native";
import {theme, DarkTheme, LightTheme} from "../assets/Theme";
import React from "react";
import {AppRoute} from "./routes/AppRoute";
import {useAppSelector} from "../hooks/redux-hook";


// This function is for the navigation
export default function Navigation() {

    const styles = useDynamicStyles();
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName={AppRoute.HOME} screenOptions={{
                tabBarStyle: {
                    backgroundColor: styles.background.color,
                    height: 70,
                    shadowOffset: {width: 0, height: -4},
                    shadowColor: theme.colors.blackColor,
                    shadowOpacity: 0.2,
                    shadowRadius: 3,

                },
                tabBarShowLabel: false,
                headerStyle: {
                    backgroundColor: styles.background.color,
                    shadowOffset: {width: 0, height: 4},
                    shadowColor: theme.colors.blackColor,
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: theme.colors.darksalmonColor,
                    fontSize: 24,
                }

            }}>
                <BottomTabNavigator.Screen name={AppRoute.HOME} component={HomeScreen}
                                           options={{
                                               title: "Accueil",
                                               tabBarIcon: ({focused}) => (
                                                   <Image source={require('../assets/home_icon.png')}
                                                      style={{tintColor: focused ? styles.focus.tintColor : styles.iconColor.tintColor }}/>
                                               )
                                           }}/>
                <BottomTabNavigator.Screen name="CatalogueStack" component={JokeNavigator}
                                           options={{
                                                  tabBarIcon: ({focused}) => (
                                                    <Image source={require('../assets/list_icon.png')}
                                                       style={{tintColor: focused ? styles.focus.tintColor : styles.iconColor.tintColor }}/>
                                                  ),
                                               headerShown: false
                                           }}/>
                <BottomTabNavigator.Screen name={AppRoute.ADD} component={AddJokeScreen}
                                           options={{
                                               title: "Ajout d'une blague",
                                              tabBarIcon: ({focused}) => (
                                                  <View style={{backgroundColor: focused ? theme.colors.darksalmonColor : theme.colors.greyColor, padding: 14, borderRadius: 5}}>
                                                      <Image source={require('../assets/add_icon.png')}
                                                         style={{tintColor: styles.iconColor.tintColor }}/>
                                                  </View>
                                              )
                                           }}/>
                <BottomTabNavigator.Screen name={AppRoute.FAVORITES} component={FavoriteScreen}
                                           options={{
                                               title: "Favoris",
                                                tabBarIcon: ({focused}) => (
                                                    <Image source={require('../assets/favorite_icon.png')}
                                                       style={{tintColor: focused ? styles.focus.tintColor : styles.iconColor.tintColor }}/>
                                                )
                                           }}/>
                <BottomTabNavigator.Screen name={AppRoute.SETTINGS} component={SettingsScreen}
                                           options={{
                                               title: "Paramètres",
                                              tabBarIcon: ({focused}) => (
                                                <Image source={require('../assets/settings_icon.png')}
                                                       style={{tintColor: focused ? styles.focus.tintColor : styles.iconColor.tintColor }}/>
                                              )
                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}

const useDynamicStyles = () => {
    const appTheme = useAppSelector(state => state.themeReducer.theme);
    const currentTheme = appTheme ? DarkTheme : LightTheme;
    return  StyleSheet.create({
        background: {
            color: currentTheme.colors.primary
        },
        iconColor: {
            tintColor: currentTheme.colors.tintColor
        },
        focus: {
            tintColor: currentTheme.colors.darksalmonColor
        }
    })
}
