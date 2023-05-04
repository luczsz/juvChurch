import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, ActivityIndicator } from 'react-native';

import api from '../../services/api';

import { styles, styled } from './style';
import { Feather } from '@expo/vector-icons';


export default function BooksList({data}) {


    const [dados, setDados] = useState([]);
    const [capitulos, setCapitulos] = useState([]);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);


    async function capt(data){
        const response = await api.get(`verses/nvi/${data.abbrev.pt}/4`);
        setDados(response.data)
        if(response.status == 200){
            //alert('deu');
            console.log(response.data.chapter);
            
            return;
        } else{
            alert('Não deu ' + response.status);
            return;
        }
    };

    async function dates(data){
        setOpen(true);
        const response = await api.get(`books/${data.abbrev.pt}`)
        .then(itens => {
            const capID = [];
            for (let i = 1; i <= data.chapters; i++){
                capID.push(i);
            }
            setCapitulos(capID);
            setLoading(false);
        });
    }

    async function verse(chapter, data){
        const response = await api.get(`/verses/nvi/${data.abbrev.pt}/${chapter}`)
        console.log(response.data.verses);
    }
    
 return (

    <View>
        <TouchableOpacity 
                style={styles.container}
                onPress={ () => dates(data)}
        >
                <Text style={styles.title} > {data.name} </Text>
                <Text style={styles.title} > {data.chapters} </Text>
                    
                
        </TouchableOpacity>

        {/* SELEÇÃO */}
        <Modal
            style={styled.containerModal}
            visible={open}
            animationType='fade'
            onRequestClose={ () => setOpen(false)}
            transparent={true}
        >
            
            <View style={styled.containerModal} >

                <View style={styled.menuModal} >

                    <View style={styled.header} >
                        <TouchableOpacity onPress={ () => setOpen(false)} >
                            <Feather name='arrow-left-circle' size={34} color={'black'}/>
                        </TouchableOpacity>
                        <Text style={styled.titleModal} > {data.name} </Text>
                    </View>

                    {loading ?
                        <ActivityIndicator size="large" color="red" />
                        :
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                        >
                    {capitulos.map((chapter, index) => (
                        <TouchableOpacity
                            style={styled.bntModal}
                            onPress={ () => verse(chapter, data)}
                        >
                            <Text key={index} style={styled.txtBntModal} >Capítulo: {chapter} </Text>
                        </TouchableOpacity>
                        
                    ))} 
                        </ScrollView>
                    }
                

                </View>

            </View>


        </Modal>

    </View>

  );
}
