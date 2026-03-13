import { StyleSheet, Text, View } from 'react-native';

export default function ResultScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Result Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});