import {createStackNavigator} from "@react-navigation/stack"
import JokeDetailsScreen from "../screens/JokeDetailsScreen";
import {DarkTheme, LightTheme, theme} from "../assets/Theme";
import {Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {AppRoute} from "./routes/AppRoute";
import {useAppSelector} from "../hooks/redux-hook";
import FavoriteScreen from "../screens/FavoriteScreen";

// This function is for the navigation between the Catalogue and the JokeDetails
export default function FavoriteNavigator() {
    const Stack = createStackNavigator();
    const navigation = useNavigation();
    const styles = useDynamicStyles();

    const backAction = (navigation) => {
        navigation.navigate(AppRoute.FAVORITES);
    }

    return (
        <Stack.Navigator initialRouteName={AppRoute.FAVORITES} screenOptions={{
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
            <Stack.Screen name={AppRoute.FAVORITES} component={FavoriteScreen} options={{
                title: "Favoris"
            }
            }/>
            <Stack.Screen name={AppRoute.DETAILS} component={JokeDetailsScreen} options={
                {
                    title: "Détails d'une blague",
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => backAction(navigation)}>
                            <Text style={{color: theme.colors.darksalmonColor, marginLeft: 10, fontSize: 30}}>←</Text>
                        </TouchableOpacity>
                    )
                }
            }/>
        </Stack.Navigator>
    )
}

const useDynamicStyles = () => {
    const appTheme = useAppSelector(state => state.themeReducer.theme);
    const currentTheme = appTheme ? DarkTheme : LightTheme;
    return {
        background: {
            color: currentTheme.colors.primary
        }
    }
}