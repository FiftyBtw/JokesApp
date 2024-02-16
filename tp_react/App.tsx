import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from "./navigation/navigation";
import { theme } from "./assets/Theme";
import store from "./redux/store";
import {Provider} from "react-redux";



//import {loadExtensions} from "./extensions";
//loadExtensions()
export default function App() {
  return (
      <>
          <Provider store={store}>
              <SafeAreaView style={styles.container}>
                  <StatusBar style="light"/>
                  <Navigation/>
              </SafeAreaView>
          </Provider>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.indigoColor,
  }
});
