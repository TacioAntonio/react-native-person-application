import { Text, View, Modal } from 'react-native';
import { Formik } from 'formik';
import SwitchAvatar from '../../../../components/SwitchAvatar/index';
import FormikTextInput from '../../../../components/FormikTextInput/index';
import FormikNumericInput from '../../../../components/FormikNumericInput/index';
import CustomButton from '../../../../components/CustomButton';
import { handleChooseAvatar } from '../../../../utils/functions';
import { styles } from './styles';

const PersonEditModal = ({
    initialValues,
    validationSchema,
    onSubmit,
    avatar,
    setAvatar,
    errorAvatar,
    modalVisible,
    setModalVisible
}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                            <View style={styles.formWrapper}>
                                <Text style={styles.title}>Edit person</Text>

                                <SwitchAvatar
                                    avatar={avatar}
                                    setAvatar={setAvatar}
                                    errorAvatar={errorAvatar}
                                    handleChooseAvatar={() => handleChooseAvatar(setAvatar)}
                                />

                                {
                                    ['Firstname', 'Lastname', 'Email'].map((eachKey, index) => (
                                        <FormikTextInput
                                            key={index}
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
                                            values={values}
                                            errors={errors}
                                            name={eachKey}
                                        />))
                                }

                                <FormikNumericInput
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    values={values}
                                    errors={errors}
                                    name={'Age'}
                                />

                                <View style={styles.modalGroupBtns}>
                                    <CustomButton
                                        typeButton={'pressable'}
                                        actionButton={'save'}
                                        textButton={'Save'}
                                        onPress={() => {
                                            setModalVisible(false);
                                            handleSubmit();
                                        }}
                                    />

                                    <CustomButton
                                        typeButton={'pressable'}
                                        actionButton={'hidden'}
                                        textButton={'Cancel'}
                                        onPress={() => setModalVisible(false)}
                                    />
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
            </View>
        </Modal>
    )
}

export default PersonEditModal;