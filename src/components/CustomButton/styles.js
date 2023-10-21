import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    btn: {
        width: 100,
        paddingTop: 6,
        paddingBottom: 6,
        borderRadius: 5
    },
    btnSave: {
        backgroundColor: '#846ce7',
    },
    btnUpdate: {
        backgroundColor: '#2c99f0',
    },
    btnDelete: {
        backgroundColor: '#f7291a',
    },
    btnHidden: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#9aa0a6',
        backgroundColor: 'transparent',
    },
    textBtn: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: '#ffffff'
    },
    textHiddenBtn: {
        fontWeight: '500',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: '#9aa0a6',
    },
});