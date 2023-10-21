import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 35,
        paddingVertical: 22,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    formWrapper: {
        backgroundColor: '#ffffff',
        padding: 26,
        borderRadius: 26
    },
    title: {
        color: '#846ce7',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12
    },
    modalGroupBtns: {
        flexDirection: 'row',
        gap: 12
    }
});