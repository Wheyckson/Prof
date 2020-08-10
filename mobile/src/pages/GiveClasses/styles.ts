import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',
        justifyContent: 'center',
        padding: 40
    },

    content: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180,
    },

    description: {
        marginTop: 24,
        color: '#ef9931',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240
    },

    okButton: {
        marginVertical: 40,
        backgroundColor: '#ef9931',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    okButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    },

});

export default styles;