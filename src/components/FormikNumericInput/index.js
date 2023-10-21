import { Text, View, TextInput } from 'react-native';
import { styles } from './styles';

const FormikNumericInput = ({
    handleChange,
    handleBlur,
    values,
    errors,
    name,
    placeholder = null,
    placeholderColor = '#bfbdf5'
}) => {
    return (
        <View style={styles.inputWrapper}>
            <TextInput
                onChangeText={(text) => {
                    const numericValue = text.replace(/[^0-9]/g, '');
                    handleChange(name)(numericValue);
                }}
                keyboardType="numeric"
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

export default FormikNumericInput;