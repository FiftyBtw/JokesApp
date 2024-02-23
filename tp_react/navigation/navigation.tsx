import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from "../screens/SettingsScreen";
import AddJokeScreen from "../screens/AddJokeScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import JokeNavigator from "./JokeNavigator";
import {Image, View} from "react-native";
import {theme} from "../assets/Theme";
import React from "react";
import {AppRoute} from "./routes/AppRoute";


// This function is for the navigation
export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName={AppRoute.HOME} screenOptions={{
                tabBarStyle: {
                    backgroundColor: theme.colors.indigoColor,
                    height: 70,
                },
                tabBarShowLabel: false,
                headerStyle: {
                    backgroundColor: theme.colors.indigoColor,
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: theme.colors.darksalmonColor,
                    fontSize: 24,
                }

            }}>
                <BottomTabNavigator.Screen name={AppRoute.HOME} component={HomeScreen}
                                           options={{
                                               title: "Home",
                                               tabBarIcon: ({focused}) => (
                                                   <Image source={require('../assets/home_icon.png')}
                                                          style={{tintColor: focused ? theme.colors.darksalmonColor : theme.colors.purpleColor }}/>
                                               )
                                           }}/>
                <BottomTabNavigator.Screen name="CatalogueStack" component={JokeNavigator}
                                           options={{
                                                  tabBarIcon: ({focused}) => (
                                                    <Image source={require('../assets/list_icon.png')}
                                                           style={{tintColor: focused ? theme.colors.darksalmonColor : theme.colors.purpleColor }}/>
                                                  ),
                                               headerShown: false
                                           }}/>
                <BottomTabNavigator.Screen name={AppRoute.ADD} component={AddJokeScreen}
                                           options={{
                                               title: "Add Joke",
                                              tabBarIcon: ({focused}) => (
                                                  <View style={{backgroundColor: theme.colors.greyColor, padding: 14, borderRadius: 5}}>
                                                      <Image source={require('../assets/add_icon.png')}
                                                       style={{tintColor: focused ? theme.colors.darksalmonColor : theme.colors.purpleColor, height: 25, width: 25 }}/>
                                                  </View>
                                              )
                                           }}/>
                <BottomTabNavigator.Screen name={AppRoute.FAVORITES} component={FavoriteScreen}
                                           options={{
                                               title: "Favorites",
                                                tabBarIcon: ({focused}) => (
                                                    <Image source={require('../assets/favorite_icon.png')}
                                                           style={{tintColor: focused ? theme.colors.darksalmonColor : theme.colors.purpleColor }}/>
                                                )
                                           }}/>
                <BottomTabNavigator.Screen name={AppRoute.SETTINGS} component={SettingsScreen}
                                           options={{
                                               title: "Settings",
                                              tabBarIcon: ({focused}) => (
                                                <Image source={require('../assets/settings_icon.png')}
                                                       style={{tintColor: focused ? theme.colors.darksalmonColor : theme.colors.purpleColor }}/>
                                              )
                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}


