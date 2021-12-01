import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
Header ,
LearnMoreLinks ,
color,
DebugInstruction,
ReloadInstruction,
} from 'react-native/Libraries/NewAppScreen';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './src/navigation/Navigation'
import Flatlist from './src/navigation/Flatlist'
import Maincode from './src/navigation/Maincode'
import Qmain from './src/navigation/Qmain'
 function App()
 {
   return(
     <>
     {/* <Navigation /> 
     <Flatlist /> */}
     {/* <Maincode /> */}
     <Qmain /> 
     </>
   );
 };

 export default App








//  export default function App(){
//   return (
//     <NavigationContainer>{
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//       }</NavigationContainer>
//   );
// }








// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { Button, Text } from 'react-native-elements';

// const App = () => (
//   <View style={styles.box}>
    
//     <Text h4 style={styles.text}>
//       Quantity Measurement
//     </Text>
//     <Button title="Getting Started" />


//     <Button
//     title="Click me!"
//     containerStyle={{
//       margin: 5,
//     }}
//     buttonStyle={{ 
//       width: "100%", 
//       borderRadius: 35,
//       backgroundColor: "green", 
//     }}
//     titleStyle={{color: "red" }}
    
//   />


// <Button
//   title="Solid Button"
// />

//  <Button
//   title="Outline button"
//   type="outline"
// />

// <Button
//   title="Clear button"
//   type="clear"
// />


// <Button
//   title="Loading button"
//   loading
// /> 
//   </View>
// );

// export default App;

// const styles = StyleSheet.create({
//   box: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flexGrow: 1,
//     padding: 20,
//   },
//   image: { width: 200, height: 200 },
//   text: { textAlign: 'center', fontWeight: 'bold' },
// });

