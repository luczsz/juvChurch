import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, Touchable, ScrollView } from 'react-native';

import { theme } from '../../global/theme';
import { styles } from './style';

import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { stores } from '../../components/list';
import Logo from '../../components/Logo';

export default function Home() {
    
    const navigation = useNavigation();
    
    return (
   <View style={styles.container} >

      <View style={styles.header} >
        <Logo/>

        <View style={{ flexDirection: 'row', padding: 3, }} >
          <Feather name='send' size={30} color={'#f5f5f5'} style={{ margin: 5 }} />
        </View>
      </View>

      <View style={styles.stores} >

          <View style={styles.addStores} >
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={ () => alert('certo')}
              style={styles.bntAddStores}
            >
              <Feather name='plus-circle' size={40} color={'white'} />
            </TouchableOpacity>
          </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.contentStores} >
          
            {stores.map( (item) => (
              <View style={styles.content} >
                <Image source={{ uri: item.profile }} style={styles.profile}  />
                <Text key={item.id} style={styles.username} > {item.username} </Text>
              </View>
            ))}

          </ScrollView>
          


      </View>
      
      <View style={styles.feed} >
          <Text> Content </Text>
      </View>
      
      <View>
          <Text> Menu </Text>
      </View>
   </View>  
  );
}
  