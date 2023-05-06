import React, {useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

export default function Maps() {
 
    const [local, setLocal] = useState('');

    function retur( coordinate ){
        setLocal(coordinate.nativeEvent.coordinate);
    }
 
    return (
   <View style={styles.container} >
        <Text> {local.latitude} </Text>
        <MapView 
            style={styles.map}
            initialRegion={{
                latitude: -3.77581,
                longitude: -38.61827,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            onRegionChange={ (coordinate) => setLocal(coordinate)}
            onPress={ (coordinate) => retur(coordinate) }
        >
            {local.latitude && local.longitude && 
            <Marker coordinate={{ latitude: local.latitude, longitude: local.longitude }} />    
            }
    
        </MapView> 
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
    map:{
        width: '80%',
        height: '80%',
    }
  });
  