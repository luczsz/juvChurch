import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';

export const styles = StyleSheet.create({

//FIXOS
container: {
      flex: 1,
      backgroundColor: theme.colors.secondary100,
      //alignItems: 'center',
      //justifyContent: 'center',
    },

// CABEÇALHO
header:{
      backgroundColor: theme.colors.primary,
      height: 75,
      marginTop: 30,
      justifyContent: 'space-between',
      alignItems: 'center',

      paddingLeft: 14,
      paddingRight: 14,

      flexDirection: 'row',
//      borderBottomWidth: 1,
//      borderBottomColor: '#DDD',
    },
stores:{
      backgroundColor: theme.colors.primary,
      flexDirection: 'row',
      marginBottom: 15,

      alignItems:'center',

      paddingLeft: 12,
//      paddingRight: 1,

      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#DDD',


    },
content:{
      alignItems: 'center',
      justifyContent: 'center',

      padding: 10,
    },
profile:{
      width: 80,
      height: 80,

      borderRadius: 50,
      borderWidth: 2,
      borderColor: theme.colors.secondary80,
    },
username:{
      fontSize: 12,
      fontWeight: 'bold',
      color: theme.colors.secondary80,
    },
addStores:{
    //backgroundColor: 'red',
    width: 100,
    height: 116,

    alignItems: 'center',
    justifyContent: 'center',
},
bntAddStores:{
   //backgroundColor: 'black',
   width: 80,
   height: 80,
   padding: 10,

   alignItems: 'center',
   justifyContent: 'center',
   
   borderRadius: 44,
   borderWidth: 2,
   borderStyle: 'dashed',
   borderColor: 'white',
},  
contentStores:{
    //backgroundColor: 'green',
    
    marginLeft: 4,
},  

//CORPO
feed:{
      backgroundColor: theme.colors.secondary100,
      flex: 1,
    }

})
