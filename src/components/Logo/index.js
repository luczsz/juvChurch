import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { theme } from '../../global/theme';
import Logs from '../../assets/JuvFLECHA.png';


export default function Logo() {
 return (
   <View style={styles.container} >
        <Image source={ Logs } style={styles.imgS} />
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    parte1:{
        fontSize: 33,
        fontWeight: 'bold',
        color: theme.colors.secondary80,
    },
    parte2:{
        fontSize: 18,
        color: theme.colors.secondary80,
    },
    imgS:{
    }

})
