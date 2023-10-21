import { Text, View, TextInput } from 'react-native';
import { styles } from './styles';

const FormikTextInput = ({
    handleChange,
    handleBlur,
    values,
    errors,
    name,
    placeholder = null,
    placeholderColor = '#bfbdf5'
}) => {
    return (
        <View style={[styles.inputWrapper]}>
            <TextInput
                onChangeText={handleChange(name)}
                onBlur={handleBlur(name)}
                value={values[name]}
                placeholder={name || placeholder}
                placeholderTextColor={placeholderColor}
                style={styles.input}
            />
            {errors[name] && <Text style={styles.errorText}>{errors[name]}</Text>}
        </View>
    )
}

export default FormikTextInput;