import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    avatarWrapper: {
        gap: 4,
        alignItems: 'center',
        marginBottom: 12
    },
    avatar: {
        alignSelf: 'center',
        width: 96,
        height: 96,
        borderRadius: 50,
        gap: 12
    },
    chooseAvatar: {
        width: 96,
        height: 96,
        borderWidth: 1,
        borderColor: '#bababa',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconChooseAvatar: {
        fontSize: 26,
        color: '#bababa',
        fontWeight: '300'
    },
    errorText: {
        color: 'red',
        fontSize: 12
    }
});