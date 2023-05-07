import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';

import MarketCuston from '../../components/MarketCuston';

import MapView, { Marker, Polyline,  } from 'react-native-maps';
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';



export default function Maps() {

    const APIKEY = 'AIzaSyALvhMEnp5upeUwRASCfJeTlqyZRx-omrs';

    const [camera, setCamera] = useState({
        center:{
            latitude: 0,
            longitude: 0,
        },
        pitch: 0,
        heading: 0,
        altitude: 1000,
        zoom: 16,
    })

    useEffect(() => {
        const startTracking = async () => {
           let { status } = await requestForegroundPermissionsAsync();
           //Obtendo permissões de localização, é necesário que as permissões sejam concedidas para que possamos obter a localização do usuário         
           if (status !== 'granted') {
              alert('Permissões para acessar a localização foram negadas.');
              return;
           }
           try {
               /* A função abaixo realiza o monitoramento da posição atual do usuário de acordo com os parâmetros fornecidos
                 e retorna uma callback sempre que obtém a localização, a partir da callback iremos obter um objeto contendo as coordenadas */
              await watchPositionAsync({
                 accuracy: Accuracy.Highest,
                 timeInterval: 5000,
                 distanceInterval: 50,
              }, (loc) => {
                 /*
                    Setando o estado da câmera a partir do operador spread, pois desejamos manter as demais propriedades da câmera intactas,
                    senão o utilizarmos o spread precisaremos definir as demais propriedas novamente, 
                    fugindo do nosso objetivo de criar uma câmera dinâmica
                 */
                 setCamera( prevCamera => ({
                    ...prevCamera,
                    center: {
                       latitude: loc.coords.latitude,
                       longitude: loc.coords.longitude,
                    }
                 }));
              }
              );
           } catch (err) {
              console.warn('Algo deu errado...');
           }
        }
        startTracking();
     }, []);

     const getDirections = (latitude, longitude) => {
        setDestination({
           latitude: latitude,
           longitude: longitude 
        });
        console.log(destination);
     };

     function drect(e){
        const latitude = e.nativeEvent.coordinate.latitude;
        const longitude = e.nativeEvent.coordinate.longitude;

        setDestination({
            latitude: latitude,
            longitude: longitude 
         });
         getDatas();
     };
 
    const [local, setLocal] = useState('');
    const [coords, setCoords] = useState([]);
    
    
    const [origin, setOrigin] = useState({ latitude: 0, longitude: 0 });
    const [destination, setDestination] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [distance, setDistance] = useState(null);
    const [duration, setDuration] = useState(null);
    const [place, setPlace] = useState('');
    const [routes, setRoutes] = useState([]);

    // Pegando as coordenadas e codificando
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

    // decodificando as coordenadas
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
    
     // um teste
    function retur( coordinate ){
        setLocal(coordinate.nativeEvent.coordinate);
    }
    
    //Buscar a rota entre pontos A e X
    const handleGetDirections = () => {
              (
          {
            origin: `${origin.latitude},${origin.longitude}`,
            destination: `${destination.latitude},${destination.longitude}`,
            key: 'AIzaSyALvhMEnp5upeUwRASCfJeTlqyZRx-omrs',
          },
          (result) => {
            setRoutes(result.routes[0].coordinates);
          }
        );
      };

    // função para calc o tempo e a distancia
    async function getDatas(){
        const origim = camera.center;
        const detinat = destination;

        const response = await fetch(
           `https://maps.googleapis.com/maps/api/directions/json?origin=${origim.latitude},${origim.longitude}&destination=${detinat.latitude},${detinat.longitude}&key=${APIKEY}`
         );
         const data = await response.json();
         console.log(data.routes[0].summary);
         
   
         if (data.status === 'OK') {
           const distance = data.routes[0].legs[0].distance.text;
           const duration = data.routes[0].legs[0].duration.text;
           const placer = data.routes[0].summary;
           const nowPlacer = placer.replace(/ and /i, ", ");

           setDistance(distance);
           setDuration(duration);
           setPlace(nowPlacer);
           console.log('te');
           return;
        } else {
            alert('Não foi possível obter as direções');
            return;
         }
    };


    return (
   <View style={styles.container} >
        <Text> {local.latitude} </Text>
        
        <Text>Tempo:  {duration} </Text>
        <Text> Distancia: {distance} </Text>
        <Text> Local: {place} </Text>


        <MapView 
            style={styles.map}
            camera={camera}
            showsUserLocation={true}
            showsMyLocationButton={false}
            zoomControlEnabled={true}
            loadingEnabled={true}
            loadingBackgroundColor={'#fff'}
            toolbarEnabled={false}
            initialRegion={{
                latitude: -3.77581,
                longitude: -38.61827,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            onRegionChange={ (coordinate) => setLocal(coordinate)}
            onPress={(e) => drect(e) }
        >

                <MarketCuston 
                    latitude={ -3.77662 }
                    longitude={ -38.61800 }
                    color={'#0096ba'}
                    id={'1'}
                    onPress={ getDirections }
                >

                </MarketCuston>
                
                <MarketCuston 
                    latitude={ -3.7704822 }
                    longitude={ -38.6161906 }
                    color={'#0096'}
                    id={'2'}
                    onPress={ getDirections }
                >

                </MarketCuston>
                
                {destination ?
                   <MapViewDirections
                   origin={
                      camera.center
                   }
                   destination={
                      destination
                   }
                   apikey={APIKEY}
                   strokeWidth={3}
                   strokeColor="#4285F4"
                   lineDashPattern={[0]}
                   //Define se o Google Maps API deve reorganizar os waypoints para obter uma rota mais rápida
                   optimizeWaypoints={true}
                   /* Define se a MapView.Polilyne deve resetar ou não na hora de calcular a rota, 
                      se as linhas apresentarem bugs sete o valor para false*/
                   resetOnChange={false}
                   //Definindo uma rota com maior precisão, evitando que a rota mostrada "corte caminho" pelo mapa
                   precision={'high'}
                   onError={(errorMessage) => {
                      alert('Erro ao obter direções...');
                   }}
                >
                </MapViewDirections>
                  :
                  null
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
  