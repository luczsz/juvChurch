import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        //backgroundColor: 'gray',
        
        width: '100%',

        marginBottom: 20,
    },

    images:{
        height: 250,
        width: '100%',
        borderRadius: 10,
    },

    content:{
        flexDirection: 'column',
        justifyContent: 'space-between',

        paddingTop: 10,
        paddingLeft: 14,
        paddingRight: 14,
    }
})
