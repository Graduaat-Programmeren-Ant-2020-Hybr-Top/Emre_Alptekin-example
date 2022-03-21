import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Example} from "./chart";

function ProvidedApp() {
  return(
      <>
        <View style={styles.container}>
            <Example/>
            <Text>ETHEREUM / BITCOIN</Text>
          <StatusBar style="auto" />
        </View>
      </>
  )
}

export default function App() {
  return (
    <ProvidedApp/>
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
