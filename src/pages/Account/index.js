import React from 'react';
import { View, Text, Button } from 'react-native';


function find(){
  
      
}

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://lucazportifolio.000webhostapp.com/buscapp.php",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const loadResponse = await response.json();
    console.log(loadResponse + 'error');
  } catch (error) {
    console.log(error + 'error2');
  }
};


export default function Account() {
 return (
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }} >
        <Text>
            Account
        </Text>

            <Button title='Acesse aqui' onPress={ () => fetchData()} />
   </View>
  );
}
