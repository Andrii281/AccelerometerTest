import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AssellerometrTest from './src';

export default function App() {
  return (
    <View style={styles.container}>
      <AssellerometrTest />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
