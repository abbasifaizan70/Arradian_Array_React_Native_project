import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screen/Login';
import Home from './Screen/Home';
import Signup from './Screen/Signup';
import Feedback from './Screen/Feedback';
import MoreOptions from './Screen/MoreOptions';


const Stack = createStackNavigator();

export default function App() {
   return (
      <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Home" component={Home} />
        
         <Stack.Screen name="Login" component={Login} />
       
         <Stack.Screen name="SignUp" component={Signup} />
      
         <Stack.Screen name="Feedback" component={Feedback} />
      
         <Stack.Screen name="MoreOptions" component={MoreOptions} />
        
      </Stack.Navigator>
    </NavigationContainer>
    );
}
