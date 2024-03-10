import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import Page from './views/Page';
import {css} from './assets/CSS/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Login, Rastreio} from './views/Index'

export default function App() {


  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"
         component={Home}
         options={{
          title:"LOGCURSORA",
          headerStyle:{backgroundColor: "#800000ff"},
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle:{fontWeight:'bold'}
         }}
         />
        <Stack.Screen name="Login"
        component={Login}
        options={{headerShown:false}}
         />
        <Stack.Screen name="Rastreio" component={Rastreio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
