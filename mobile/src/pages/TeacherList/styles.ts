import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#313131',
    },

    teacherList: {
        marginTop: -40,
    },

    searchForm: {
        marginBottom: 24,
    },

    label: {
        color: '#ef9931',
        fontFamily: 'Poppins_400Regular',
    },

    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 10,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    inputBlock: {
        width: '48%',
    },

    submitButton: {
        backgroundColor: '#ef9931',
        height: 56,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    submitButtonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    },

    KeyboardAvoidingView: {
        marginBottom: -40,
       },
   

})

export default styles;