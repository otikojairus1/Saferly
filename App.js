
import { StatusBar } from 'expo-status-bar';
import {React, useRef, useState} from 'react'
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { NativeBaseProvider, Box } from 'native-base';

import Contacts from './screens/contacts';
import Dashboard from './screens/dashboard';
import { Orange } from './colors/colors';
import { NavigationContainer } from '@react-navigation/native';

 const Stack = createNativeStackNavigator();
export default function App() {

  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <View style={{height:120, justifyContent:"center", alignItems:"center", backgroundColor:Orange, width:"120%"}}>
        <Text style={{fontSize:37, fontWeight:"bold", color:"#fff"}}>Saferly</Text>
      </View>

    </View>
  );
  return (
<NativeBaseProvider>
    <DrawerLayoutAndroid
    ref={drawer}
    drawerWidth={300}
    drawerPosition={drawerPosition}
    renderNavigationView={navigationView}
  >
    <NavigationContainer>
    <Stack.Navigator>
      
     
      <Stack.Screen name="Dashboard" options={{ headerShown: false, headerTitleAlign: "center" }}>
         {props => <Dashboard {...props} openDrawer={() => drawer.current.openDrawer()} options={{ headerShown: false, headerTitleAlign: "center" }}/>}
      </Stack.Screen>
      <Stack.Screen name="Contacts" component={Contacts} options={{ headerShown: false, headerTitleAlign: "center" }} />
      
    </Stack.Navigator>
    </NavigationContainer>
    

{/* <View style={styles.container}>
   
        <Button
          title="Open drawer"
          onPress={() => drawer.current.openDrawer()}
        />
      </View> */}
  </DrawerLayoutAndroid>




  </NativeBaseProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    marginLeft:-20,
    
    // alignItems: "center",
    // justifyContent: "center",
    padding: 16
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  }})


