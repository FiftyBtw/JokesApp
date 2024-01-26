import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { JokeStub } from './model/JokeStub';


import {loadExtensions} from "./extensions";

loadExtensions()

const dataCustomJoke = JokeStub.customJokeStub()
const dataSampleJoke = JokeStub.sampleJokeStub()
export default function App() {
  return (
    <View style={styles.container}>
        <Text>Les CustomJoke :</Text>
        <Text>{dataCustomJoke.displayJoke()}</Text>
        <Text>Les SampleJoke :</Text>
        <Text>{dataSampleJoke.displayJoke()}</Text>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
