import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function Home() {
    
    const navigation = useNavigation();
    
    return (
   <View style={styles.container} >

      <View style={styles.header} >
        <Image
          source={{ uri: 'https://logosmarcas.net/wp-content/uploads/2020/04/Instagram-Logo-2016-Presente.jpg' }}
          style={{ width: 170, height: 70 }}
        />

        <View style={{ flexDirection: 'row', padding: 3, }} >
          <Feather name='heart' size={30} color={'black'} style={{ margin: 5 }}  />
          <Feather name='send' size={30} color={'black'} style={{ margin: 5 }} />
        </View>
      </View>

      <View>
          <Text> Stores </Text>
      </View>
      
      <View>
          <Text> Content </Text>
      </View>
      
      <View>
          <Text> Menu </Text>
      </View>
   </View>  
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //alignItems: 'center',
      //justifyContent: 'center',
    },

    header:{
      //backgroundColor: '#DDD',
      height: 75,
      marginTop: 32,
      justifyContent: 'space-between',
      alignItems: 'center',

      paddingLeft: 14,
      paddingRight: 14,

      flexDirection: 'row',
//      borderBottomWidth: 1,
//      borderBottomColor: '#DDD',
    }
  });
  