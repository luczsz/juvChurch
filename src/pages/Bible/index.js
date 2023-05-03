import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';

import api from '../../services/api';

import BooksList from '../../components/BooksList';

export default function Bible() {

    const [dados, setDados] = useState([]);
    const [ids, setIds] = useState(0);

    useEffect( () => {
       async function loadDados(){
            const response = await api.get('/books');
            setDados(response.data);
            console.log(response.status);
       }
       loadDados();
    },[]);

    
    return (
        <View style={styles.container} >
            <ScrollView
                style={styles.listView}
                showsVerticalScrollIndicator={false}
            >
                {dados.map( (item) => (
                    <BooksList data={item} />
            ))}      

            </ScrollView>
        
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
    listView:{
        backgroundColor: '#DDD',
        height: '100%',
        width: '100%',

        marginTop: 10,
        marginBottom: 10,

        paddingLeft: 10,
        paddingRight: 10,
    }
  });
  