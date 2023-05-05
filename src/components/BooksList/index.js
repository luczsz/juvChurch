import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, ActivityIndicator, FlatList } from 'react-native';

import api from '../../services/api';

import { styles, styled } from './style';
import { Feather } from '@expo/vector-icons';


export default function BooksList({data}) {

    const [versu, setVersu] = useState('');

    const [dados, setDados] = useState([]);
    const [capitulos, setCapitulos] = useState([]);
    const [versiculos, setVersiculos] = useState([]);

    const [open, setOpen] = useState(false);
    const [openVerse, setOpenVerse] = useState(false);
    
    const [loading, setLoading] = useState(true);
    const [load, setLoad] = useState(true);


    // Função aonde gera os números dos capitulos dos livoros
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

    // Função que trás o resultado dos versiculos
    async function verse(chapter, data){
        setVersu(chapter);
        setOpenVerse(true);
        const response = await api.get(`/verses/nvi/${data.abbrev.pt}/${chapter}`).
        then(item => {
            if(item.status === 200){
                setLoad(false);
                setVersiculos(item.data.verses);
                return;
            } else{
                alert('cert');
                return;
            }
        })
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
        
        {/* VERSOS */}

        <Modal
            //style={styled.containerModal}
            visible={openVerse}
            animationType='fade'
            onRequestClose={ () => setOpenVerse(false)}
            //transparent={true}
        >
            <View style={styled.headerVerse} >

                    <TouchableOpacity onPress={ () => setOpenVerse(false)} >
                    <Feather name='arrow-left-circle' size={34} color={'#DDD'} />
                    </TouchableOpacity>

                    <Text style={styled.titleVerse} > Capítulo: {versu}  </Text>
            </View>

            <View style={styled.contentVerse} >

                    {load ? 
                        <ActivityIndicator size="large" color="red" />
                        :
                        <FlatList
                            data={versiculos}
                            keyExtractor={(item) => item.number}
                            renderItem={({item}) => <Text> {item.number} {item.text} </Text> }
                        />
                    }

                   

            </View>
        </Modal>
    </View>

  );
}
