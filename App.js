import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import api from './src/services/api';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

export default function App() {

  const [dados, setDados] = useState([]);

  async function loadDados(){
    const response = await api.get('verses/nvi/job/1');
    setDados(response.data.verses);
    
  }
  

  return (
    <NavigationContainer>
        <StatusBar translucent />
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
