import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from "../screens/SettingsScreen";
import CatalogueScreen from "../screens/CatalogueScreen"
import AddJokeScreen from "../screens/AddJokeScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import {Image, View} from "react-native";
import {theme} from "../assets/Theme";
import React from "react";


// This function is for the navigationç
export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home" screenOptions={{
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
                <BottomTabNavigator.Screen name="Home" component={HomeScreen}
                                           options={{
                                               tabBarIcon: ({focused}) => (
                                                   <Image source={require('../assets/home_icon.png')}
                                                          style={{tintColor: focused ? theme.colors.darksalmonColor : theme.colors.purpleColor }}/>
                                               )
                                           }}/>
                <BottomTabNavigator.Screen name="Catalogue" component={CatalogueScreen}
                                           options={{
                                                  tabBarIcon: ({focused}) => (
                                                    <Image source={require('../assets/list_icon.png')}
                                                           style={{tintColor: focused ? theme.colors.darksalmonColor : theme.colors.purpleColor }}/>
                                                  )
                                           }}/>
                <BottomTabNavigator.Screen name={"AddJoke"} component={AddJokeScreen}
                                           options={{
                                              tabBarIcon: ({focused}) => (
                                                  <View style={{backgroundColor: theme.colors.greyColor, padding: 14, borderRadius: 5}}>
                                                      <Image source={require('../assets/add_icon.png')}
                                                       style={{tintColor: focused ? theme.colors.darksalmonColor : theme.colors.purpleColor, height: 25, width: 25 }}/>
                                                  </View>
                                              )
                                           }}/>
                <BottomTabNavigator.Screen name={"Favorites"} component={FavoriteScreen}
                                           options={{
                                                tabBarIcon: ({focused}) => (
                                                    <Image source={require('../assets/favorite_icon.png')}
                                                           style={{tintColor: focused ? theme.colors.darksalmonColor : theme.colors.purpleColor }}/>
                                                )
                                           }}/>
                <BottomTabNavigator.Screen name="Settings" component={SettingsScreen}
                                           options={{
                                              tabBarIcon: ({focused}) => (
                                                <Image source={require('../assets/settings_icon.png')}
                                                       style={{tintColor: focused ? theme.colors.darksalmonColor : theme.colors.purpleColor }}/>
                                              )
                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}


