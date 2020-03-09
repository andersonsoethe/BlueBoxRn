import React, {Component}from 'react';

import { createAppContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator ();

import Main from './pages/main';
import home from './pages/home';
import about from './pages/about';
import howToUse from './pages/howToUse';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function Routes () {
    return(
    <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false}}/>
        <Stack.Screen name="Home" component={home}/>
        <Stack.Screen name="About" component={about}/>
        <Stack.Screen name="HowtoUse" component={howToUse}/>
    </Stack.Navigator>
    );
}