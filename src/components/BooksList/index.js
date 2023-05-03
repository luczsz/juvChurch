import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import { styles } from './style';


export default function BooksList({data}) {
    
    const [dados, setDados] = useState([]);


    async function capt(data){
        const response = await api.get(`verses/nvi/${data.abbrev.pt}/1`);
        setDados(response.data)
        if(response.status == 200){
            //alert('deu');
            console.log(response.data.chapter);
            
            return;
        } else{
            alert('Não deu ' + response.status);
            return;
        }
    }

    
 return (
   <TouchableOpacity 
        style={styles.container}
        onPress={ () => capt(data)}
   >
        <Text style={styles.title} > {data.name} </Text>
            
        
   </TouchableOpacity>
  );
}
