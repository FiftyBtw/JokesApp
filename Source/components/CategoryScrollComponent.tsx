import {Text, View, StyleSheet} from "react-native";
import {theme} from "../assets/Theme";

type CategoryItemProps = {
    category: string;
};


// Composant servant à afficher une catégorie sous forme de chip
export default function CategoryScrollComponent(props : CategoryItemProps) {
    return (
        <View style={styles.categoryContainer}>
            <Text style={styles.categoryChip} testID="category-chip">{props.category}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    categoryContainer: {
        backgroundColor: theme.colors.greyColor,
        borderRadius : 25,
        padding: 3,
        justifyContent: "center",
        alignSelf: "baseline",
        marginLeft: 20
    },
    categoryChip: {
        color: '#fff',
        padding: 5,
        marginLeft: 4,
        marginRight: 4
    }
});