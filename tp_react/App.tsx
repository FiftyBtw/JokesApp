import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CataloguePage  from "./screens/Catalogue";


//import {loadExtensions} from "./extensions";
//loadExtensions()
export default function App() {
  return (
      <>
          <StatusBar style="light" />
          <SafeAreaView style={styles.topSafeArea}/>
        <SafeAreaView style={styles.container}>
                <CataloguePage />
        </SafeAreaView>
        <SafeAreaView style={styles.botSafeArea}/>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botSafeArea: {
    flex: 1,
    backgroundColor: 'rgb(74,74,102)',
  },
  topSafeArea: {
    flex: 0,
    backgroundColor: 'rgb(14,14,42)',
  }
});
