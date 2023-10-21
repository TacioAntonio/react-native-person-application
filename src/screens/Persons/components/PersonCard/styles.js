import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        gap: 24,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#ccc',
        padding: 20,
        paddingRight: 25,
        paddingLeft: 25,
        marginBottom: 12
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 50,
    },
    detailsContainer: {
        flex: 1,
        gap: 6,
    },
    text: {
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    groupBtns: {
        flex: 1,
        flexDirection: 'row',
        gap: 12
    }
});