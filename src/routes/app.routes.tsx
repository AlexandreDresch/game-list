import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Home } from '../screens/Home';
import { AppointmentCreate } from "../screens/AppointmentCreate";
import { AppointmentDetails } from "../screens/AppointmentDetails";



const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    const navigatorOptions = {
        headerShown: false,
      }

    return (                
        <Navigator
        screenOptions={navigatorOptions}
        
        >
            <Screen
            name="Home"
            component={Home}            
            />
            <Screen
            name="AppointmentDetails"
            component={AppointmentDetails}            
            />
            <Screen
            name="AppointmentCreate"
            component={AppointmentCreate}            
            />
        </Navigator>
    )
}