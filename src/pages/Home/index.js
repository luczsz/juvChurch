import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
    
    const navigation = useNavigation();
    
    return (
   <View style={styles.container} >
        <Text>Home</Text>
        <Button title='biblia' onPress={ () => navigation.navigate('Bible')} />
        <Button title='Maps' onPress={ () => navigation.navigate('Map')} />
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
  