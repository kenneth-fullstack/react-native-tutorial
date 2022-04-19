import { StyleSheet, View, Text, Pressable } from 'react-native';
import { globalStyles } from '../styles/global';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <View style={globalStyles.addressWrapper}>
          <FontAwesome5 name="map-marker-alt" size={20} color="black" />
          <Text style={globalStyles.addressText}>1234 Flatbush Ave</Text>
        </View>
        <Pressable style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>For today</Text>
          <MaterialIcons name="arrow-drop-down" size={24} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
}
