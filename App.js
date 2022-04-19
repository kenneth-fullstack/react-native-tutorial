import * as Font from 'expo-font';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';

// Screens
import Home from './screens/home';
import About from './screens/about';

export default function App() {
  const getFonts = () =>
    Font.loadAsync({
      'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
      'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
    });

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const Stack = createNativeStackNavigator();

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} onError={() => console.log('Error')} />
    );
  }
}

// import { StatusBar } from 'expo-status-bar';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   Alert,
//   TextInput,
//   FlatList,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   Keyboard,
// } from 'react-native';
// import { useState } from 'react';
// import AppLoading from 'expo-app-loading';

// Compoents
// import Header from './components/layout/Header';
// import AddTodo from './components/AddTodo';
// import TodoItem from './components/TodoItem';
// import Sandbox from './components/sandbox';

// Screens
// import Home from './screens/home';
// import About from './screens/about';

// const getFonts = () =>
//   Font.loadAsync({
//     'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
//     'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
//   });

// export default function App() {
// console.log('Hello World');

// const [name, setName] = useState('Kenneth');
// const [age, setAge] = useState(30);
// const [people, setPeople] = useState([
//   { name: 'shaun', key: 1 },
//   { name: 'shaun', key: 2 },
//   { name: 'shaun', key: 3 },
//   { name: 'shaun', key: 4 },
//   { name: 'shaun', key: 5 },
//   { name: 'shaun', key: 6 },
//   { name: 'shaun', key: 7 },
//   { name: 'shaun', key: 8 },
//   { name: 'shaun', key: 9 },
//   { name: 'shaun', key: 10 },
//   { name: 'shaun', key: 11 },
//   { name: 'shaun', key: 12 },
// ]);

// const onClickHandler = () => {
//   setName('Hello');
// };

// const pressHandler = (id) => {
//   setPeople((prevPeople) => {
//     return prevPeople.filter((person) => person.key != id);
//   });
// };

// return (
//   <View style={styles.container}>
//     <Text>Open up App.js to start working on your app!</Text>
//     <View style={styles.body}>
//       <Text style={styles.header}>
//         Open up App.js to <Text style={styles.span}>start working</Text> on your app!
//       </Text>
//       <View>
//         <Text>Enter your name:</Text>
//         <TextInput
//           style={styles.input}
//           multiline
//           placeholder="Enter your name"
//           onChangeText={(val) => setName(val)}
//         />

//         <Text>Enter your age:</Text>
//         <TextInput
//           style={styles.input}
//           keyboardType="numeric"
//           placeholder="Enter your age"
//           onChangeText={(val) => setAge(val)}
//         />
//       </View>
//       <Text>
//         Name: {name}, Age: {age}
//       </Text>
//     </View>
//     <Button title="Click Me" onPress={onClickHandler}></Button>

//     <FlatList
//       numColumns={2}
//       data={people}
//       renderItem={({ item }) => (
//         <TouchableOpacity onPress={() => pressHandler(item.key)}>
//           <Text style={styles.item}>{item.name}</Text>
//         </TouchableOpacity>
//       )}
//     />
//     <StatusBar style="auto" />
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 50,
//   },
//   body: {
//     padding: 20,
//     color: 'red',
//   },
//   header: {
//     fontWeight: 'bold',
//     color: 'green',
//   },
//   span: {
//     color: 'red',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     paddingTop: 2,
//     paddingBottom: 2,
//     paddingStart: 5,
//     width: 200,
//   },
//   item: {
//     padding: 20,
//     backgroundColor: '#c3cfd9',
//     margin: 20,
//   },
// });

// const [todos, setTodos] = useState([
//   { text: 'buy coffee', key: '1' },
//   { text: 'create an app', key: '2' },
//   { text: 'play on the switch', key: '3' },
// ]);

// const pressHandler = (key) => {
//   setTodos((prevTodos) => {
//     return prevTodos.filter((todo) => todo.key != key);
//   });
// };

// const submitHandler = (text) => {
//   if (text.length > 3) {
//     setTodos((prevTodos) => {
//       return [{ text, key: Math.random().toString() }, ...prevTodos];
//     });
//   } else {
//     Alert.alert('OOPS', 'Todo must be over 3 characters long', [
//       { text: 'Understood', onPress: () => console.log('alert closed') },
//     ]);
//   }
// };

// const [fontsLoaded, setFontsLoaded] = useState(false);
// const Stack = createNativeStackNavigator();

// if (fontsLoaded) {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="About" component={About} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// } else {
//   return (
//     <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} onError={() => console.log('Error')} />
//   );
// }

// return (
//   <TouchableWithoutFeedback
//     onPress={() => {
//       Keyboard.dismiss();
//       console.log('dismissed');
//     }}
//   >
//     <View style={styles.container}>
//       <Header />
//       <View style={styles.content}>
//         <AddTodo submitHandler={submitHandler} />
//         <View style={styles.list}>
//           <FlatList data={todos} renderItem={({ item }) => <TodoItem item={item} pressHandler={pressHandler} />} />
//         </View>
//       </View>
//     </View>
//   </TouchableWithoutFeedback>
// );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   content: {
//     padding: 40,
//   },
//   list: {
//     marginTop: 20,
//   },
// });
