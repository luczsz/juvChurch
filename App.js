import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import api from './src/services/api';

export default function App() {

  const [dados, setDados] = useState([]);

  async function loadDados(){
    const response = await api.get('verses/nvi/job/1');
    setDados(response.data.verses);
    
  }
  

  return (
    <View style={styles.container}>
      <Text>igreja</Text>
      
      <Button
        title='Adicionar'
        onPress={ () => loadDados()}
      />


      {dados.map( (item) => (
        <Text key={item.number} > {item.text} </Text>
      ))}


      <StatusBar style="auto" />
    </View>
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
