import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import api from './src/services/api';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import { theme } from './src/global/theme';

export default function App() {

  const [dados, setDados] = useState([]);
  

  return (
    <NavigationContainer>
        <StatusBar translucent style='light' backgroundColor={theme.colors.primary} />
        <Routes/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
