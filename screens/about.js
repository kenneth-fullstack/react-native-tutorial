import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>About Screen</Text>
      {/* <Button title="Go back to Home" onPress={() => navigation.navigate('Home')} /> */}
      <Button title="Go back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
