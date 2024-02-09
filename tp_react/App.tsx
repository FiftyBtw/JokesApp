import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CataloguePage  from "./screens/CatalogueScreen";
import Navigation from "./navigation/navigation";
import { theme } from "./assets/Theme";


//import {loadExtensions} from "./extensions";
//loadExtensions()
export default function App() {
  return (
      <SafeAreaView style={styles.container}>
          <StatusBar style="light"/>
          <Navigation/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.indigoColor,
  }
});
