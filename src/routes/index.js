import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { theme } from '../global/theme';

//pages centrais
import Home from '../pages/Home';

//pages gerais
import Bible from '../pages/Bible';
import Maps from '../pages/Maps';
import Account from '../pages/Account';

export default function Routes() {
    
    const AppStack = createNativeStackNavigator();
    const TabStack = createBottomTabNavigator();

    function Tabs(){
        return(
            <TabStack.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle:{
                        position: 'absolute',
                        backgroundColor: '#121212',

                        borderTopWidth: 0,

                        //bottom: 14,
                        elevation: 0,
                        //borderRadius: 4,
                        height: 60,
                                    
                    }
                }}
            >
                <TabStack.Screen 
                    name='Inicio' 
                    component={Home} 
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused}) => {
                            if(focused){
                            return <AntDesign name="home" size={24} color={theme.colors.primary} />
                        }
                            return <AntDesign name="home" size={24} color="#DDD" />
    
                        }
                    }}
                />
                
                <TabStack.Screen 
                    name='Biblia' 
                    component={Bible}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused}) => {
                            if(focused){
                            return <AntDesign name="book" size={24} color={theme.colors.primary} />
                        }
                            return <AntDesign name="book" size={24} color="#DDD" />
    
                        }
                    }} 
                />
                <TabStack.Screen 
                    name='Maps' 
                    component={Maps}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused}) => {
                            if(focused){
                            return <Ionicons name="location" size={24} color={theme.colors.primary} />
                        }
                            return <Ionicons name="location-outline" size={24} color="#DDD" />
    
                        }
                    }}
                />
                <TabStack.Screen 
                    name='Account' 
                    component={Account}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused}) => {
                            if(focused){
                            return <Ionicons name="people-circle" size={24} color={theme.colors.primary} />
                        }
                            return <Ionicons name="people-circle-outline" size={24} color="#DDD" />
    
                        }
                    }}
                />
            </TabStack.Navigator>
        )
    };

    
    return (
        <AppStack.Navigator>
            <AppStack.Screen name='Home' component={Tabs} options={{ headerShown: false, }} />
            <AppStack.Screen name='Bible' component={Bible} />
            <AppStack.Screen name='Map' component={Maps} />
        </AppStack.Navigator>
  );
}
