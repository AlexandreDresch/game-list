import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';



const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
    const navigatorOptions = {
        headerShown: false,
      }

    return (                
        <Navigator
        screenOptions={navigatorOptions}
        
        >
            <Screen
            name="SignIn"
            component={SignIn}            
            />
            <Screen
            name="Home"
            component={Home}            
            />
        </Navigator>
    )
}