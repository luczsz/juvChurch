import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        height: 60,
        width: '100%',
        backgroundColor: '#f5f5f5',

        marginBottom: 3,

        borderBottomWidth: 1,
        borderBottomColor: 'blue',

        justifyContent: 'center',

        paddingLeft: 14,
        paddingRight: 14,
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
});

export const styled = StyleSheet.create({
    containerModal:{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        
        alignItems: 'center',
        justifyContent: 'center',
    },
    header:{
        height: 60,
        flexDirection: 'row',
        
        paddingLeft: 14, 
        
        alignItems: 'center',
    },
    menuModal:{
        backgroundColor: '#fff',
        borderRadius: 12,

        height: 370,
        width: '80%',

        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    bntModal:{
        backgroundColor: '#f5f5f5',
        height: 40,

        marginBottom: 2,

        alignItems: 'center',
        justifyContent: 'center',
    },
    txtBntModal:{
        color: 'black',
        fontSize: 18,
        
    },
    titleModal:{
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

    headerVerse:{
        backgroundColor: 'blue',
        height: 60,
        width: '100%',
        flexDirection: 'row',

        alignItems: 'center',
        //justifyContent: 'center',

        paddingLeft: 12,
        paddingRight: 12,
    },
    titleVerse:{
        color: '#f5f5f5',
        fontSize: 22,
        fontWeight: 'bold',
        textTransform: 'uppercase',

        marginLeft: 10,
    },

    contentVerse:{
        flex: 1,
        width: '100%',

        padding: 10,

        backgroundColor: '#DDD',
    }
})
