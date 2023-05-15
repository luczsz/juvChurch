import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './style';
import { Feather, FontAwesome5 } from '@expo/vector-icons';


export default function PostFeed({data}) {
 return (
   <View style={styles.container} >  
        <Image style={styles.images} source={{ uri: data.photo}} />

        <View style={styles.content} >

          <View style={{ flexDirection: 'row', marginBottom: 5, justifyContent: 'space-between', }} >
             <View style={{ flexDirection: 'row',}} >
                <Feather name='heart' size={30} color={'white'} style={{ paddingRight: 5, }}  />
                <FontAwesome5 name="comment" size={30} color="white" />
             </View>

               <Feather name="bookmark" size={30} color="white" />
          </View>
  
            <Text style={{ color: '#d9d9d9' }} > {data.time} </Text>

          <View style={{ flexDirection: 'row', marginTop: 5, }} >
            <Text style={{ color: 'white', fontWeight: 'bold' }} > {data.username} </Text>
            <Text style={{ color: 'white' }} > {data.legender} </Text>

          </View>

         

        </View>
   </View>
  );
}
