import React, {useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';

import MapView, { Marker, Polyline } from 'react-native-maps';

export default function Maps() {
 
    const [local, setLocal] = useState('');
    const [coords, setCoords] = useState([]);

    async function onMapPress(coordinate){
        const latitude = coordinate.nativeEvent.coordinate.latitude;
        const longitude = coordinate.nativeEvent.coordinate.longitude;

        //Definindo pontos (A, X)
        const pointA = { latitude: -3.77581, longitude: -38.61827 };
        const pointX = { latitude, longitude };

        //Requisição API
        const apiKey =  'AIzaSyALvhMEnp5upeUwRASCfJeTlqyZRx-omrs';
        const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${pointA.latitude},${pointA.longitude}&destination=${pointX.latitude},${pointX.longitude}&mode=driving&key=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();

        if(data.status === 'OK'){
            const points = data.routes[0].overview_polyline.points;
            const decodedPoints = decodePolyline(points);

            setCoords(decodedPoints);
            console.log(decodedPoints);
            return;
        } else {
            console.log('erro');
            return;
        }
    };

    const decodePolyline = (encoded) => {
        let index = 0;
        const len = encoded.length;
        let lat = 0;
        let lng = 0;
        const points = [];
    
        while (index < len) {
          let b;
          let shift = 0;
          let result = 0;

          do {
            b = encoded.charCodeAt(index++) - 63;
            result |= (b & 0x1f) << shift;
            shift += 5;
          } while (b >= 0x20);
    
          const dlat = (result & 1) != 0 ? ~(result >> 1) : result >> 1;
          lat += dlat;
    
          shift = 0;
          result = 0;
    
          do {
            b = encoded.charCodeAt(index++) - 63;
            result |= (b & 0x1f) << shift;
            shift += 5;
          } while (b >= 0x20);

          const dlng = (result & 1) != 0 ? ~(result >> 1) : result >> 1;
      lng += dlng;

      points.push({ latitude: lat / 1e5, longitude: lng / 1e5 });
    }

    return points;
     };

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
            onPress={ (coordinate) => onMapPress(coordinate) }
        >
            <Marker coordinate={{ latitude: -3.77581, longitude: -38.61827 }} />
            <Polyline coordinates={coords} strokeWidth={5} strokeColor="blue" /> 
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
  