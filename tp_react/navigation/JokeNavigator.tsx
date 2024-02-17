import {createStackNavigator} from "@react-navigation/stack"
import CatalogueScreen from "../screens/CatalogueScreen"
import JokeDetailsScreen from "../screens/JokeDetailsScreen";
import {theme} from "../assets/Theme";
import {Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";

// This function is for the navigation between the Catalogue and the JokeDetails
export default function JokeNavigator() {
    const Stack = createStackNavigator();
    const navigation = useNavigation();

    // @ts-ignore
    return (
        <Stack.Navigator initialRouteName="Catalogue" screenOptions={{
            headerStyle: {
                backgroundColor: theme.colors.indigoColor,
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                color: theme.colors.darksalmonColor,
                fontSize: 24,
            },
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Catalogue")}>
                    <Text style={{color: theme.colors.darksalmonColor, marginLeft: 10, fontSize: 30}}>←</Text>
                </TouchableOpacity>
            )

        }}>
            <Stack.Screen name="Catalogue" component={CatalogueScreen} options={{

            }
            }/>
            <Stack.Screen name="Détails d'une blague" component={JokeDetailsScreen}/>
        </Stack.Navigator>
    )
}