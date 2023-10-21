import { Text, View, Image } from 'react-native';
import CustomButton from '../../../../components/CustomButton';
import { styles } from './styles';

const PersonCard = ({
    Id,
    Avatar,
    Firstname,
    Lastname,
    Email,
    Age,
    _deletePerson,
    _getPersonById
}) => {
    return (
        <>
            <View style={styles.item}>
                <Image
                    style={styles.avatar}
                    source={{ uri: Avatar }}
                />

                <View style={styles.detailsContainer}>
                    <Text style={styles.text}>{Firstname} {Lastname}</Text>
                    <Text style={styles.text}>{Email}</Text>
                    <Text style={styles.text}>Age: {Age}</Text>

                    <View style={styles.groupBtns}>
                        <CustomButton
                            typeButton={'touchableOpacity'}
                            actionButton={'update'}
                            textButton={'Edit'}
                            onPress={() => _getPersonById(Id)}
                        />

                        <CustomButton
                            typeButton={'touchableOpacity'}
                            actionButton={'delete'}
                            textButton={'Remove'}
                            onPress={() => _deletePerson(Id)}
                        />
                    </View>
                </View>
            </View>
        </>
    )
}

export default PersonCard;