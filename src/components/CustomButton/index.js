import { Button, TouchableOpacity, Pressable, Text } from 'react-native';
import { styles } from './styles';

/**
 * 
 * @param {*} typeButton button | touchableOpacity | pressable
 * @param {*} actionButton save | update | delete | hidden
 * @param {*} textButton The text inside the button
 * @param {*} onPress () => { ... } | function
 * @returns 
 */
const CustomButton = ({ typeButton, actionButton, textButton, onPress }) => {
    const stylesBtn = {
        'save': styles.btnSave,
        'update': styles.btnUpdate,
        'delete': styles.btnDelete,
        'hidden': styles.btnHidden
    }

    const colorsBtn = {
        'save': '#846ce7',
        'update': '#2c99f0',
        'delete': '#f7291a'
    }

    const switchTypeButtons = (param) => {
        switch (param) {
            case 'button':
                if (actionButton === 'hidden') return;

                return (<Button
                    title={textButton}
                    color={colorsBtn[actionButton]}
                    onPress={onPress}
                />);
            case 'touchableOpacity':
                return (<TouchableOpacity
                    style={[styles.btn, stylesBtn[actionButton]]}
                    onPress={onPress}>
                    <Text style={(actionButton === 'hidden' ? styles.textHiddenBtn : styles.textBtn)}>{textButton}</Text>
                </TouchableOpacity>);
            case 'pressable':
                return (<Pressable
                    style={[styles.btn, stylesBtn[actionButton]]}
                    onPress={onPress}>
                    <Text style={(actionButton === 'hidden' ? styles.textHiddenBtn : styles.textBtn)}>{textButton}</Text>
                </Pressable>);
            default:
                return;
        }
    }

    return (switchTypeButtons(typeButton));
}

export default CustomButton;