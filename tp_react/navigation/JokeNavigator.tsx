import {createStackNavigator} from "@react-navigation/stack"
import CatalogueScreen from "../screens/CatalogueScreen"
import JokeDetailsScreen from "../screens/JokeDetailsScreen";
import {theme} from "../assets/Theme";
import {Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {AppRoute} from "./routes/AppRoute";

// This function is for the navigation between the Catalogue and the JokeDetails
export default function JokeNavigator() {
    const Stack = createStackNavigator();
    const navigation = useNavigation();

    return (
        <Stack.Navigator initialRouteName={AppRoute.CATALOGUE} screenOptions={{
            headerStyle: {
                backgroundColor: theme.colors.indigoColor,
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                color: theme.colors.darksalmonColor,
                fontSize: 24,
            }
        }}>
            <Stack.Screen name={AppRoute.CATALOGUE} component={CatalogueScreen} options={{
                title: "Catalogue"
            }
            }/>
            <Stack.Screen name={AppRoute.DETAILS} component={JokeDetailsScreen} options={
                {
                    title: "Détails d'une blague",
                    headerLeft: () => (
                        // @ts-ignore
                        <TouchableOpacity onPress={() => navigation.navigate(AppRoute.CATALOGUE)}>
                            <Text style={{color: theme.colors.darksalmonColor, marginLeft: 10, fontSize: 30}}>←</Text>
                        </TouchableOpacity>
                    )
                }
            }/>
        </Stack.Navigator>
    )
}