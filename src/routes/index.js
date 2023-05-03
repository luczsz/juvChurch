import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//pages centrais
import Home from '../pages/Home';

//pages gerais
import Bible from '../pages/Bible';

export default function Routes() {
    
    const AppStack = createNativeStackNavigator();

    return (
        <AppStack.Navigator>
            <AppStack.Screen name='Home' component={Home} />
            <AppStack.Screen name='Bible' component={Bible} />
        </AppStack.Navigator>
  );
}
