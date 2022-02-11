import React from "react";
import { NavigationContainer } from "@react-navigation/native"; 

import { AuthRoutes } from './auth.routes';

export function Routes() {
    return(      
        <NavigationContainer
        theme={{
            colors: {
              primary: 'transparent',
              background: 'transparent', 
              card: 'transparent',
              text: 'transparent',
              border: 'transparent',
              notification: 'transparent',
            },
          }}
        >
            <AuthRoutes />
        </NavigationContainer>           
    )
}