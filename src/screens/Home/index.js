import { useState } from 'react';
import { Text, View, Alert } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import SwitchAvatar from '../../components/SwitchAvatar/index';
import FormikTextInput from '../../components/FormikTextInput/index';
import FormikNumericInput from '../../components/FormikNumericInput/index';
import CustomButton from '../../components/CustomButton';
import { createPerson } from '../../services/personsService';
import { handleChooseAvatar } from '../../utils/functions';
import { styles } from './styles';

export default function Home() {
  const [avatar, setAvatar] = useState('');
  const [errorAvatar, setErrorAvatar] = useState('');

  const _createPerson = (body, resetFormWithSuccess) => {
    createPerson(body)
      .then(_ => {
        Alert.alert("Person created succesfully");
        resetFormWithSuccess();
      })
      .catch(_ => Alert.alert("Error when trying to create person"))
  }

  const initialValues = { Firstname: '', Lastname: '', Email: '', Age: '' };
  const validationSchema = yup.object().shape({
    Firstname: yup.string().required('Required field'),
    Lastname: yup.string().required('Required field'),
    Email: yup.string().email('E-mail is invalid').required('Required field'),
    Age: yup.number().required('Required field'),
  });
  const onSubmit = (values, { resetForm }) => {
    const { Firstname, Lastname, Email, Age } = values;

    if (!avatar) {
      setErrorAvatar('Avatar is required');
      return;
    }

    const BODY = {
      Avatar: avatar,
      Firstname,
      Lastname,
      Email,
      Age: Number(Age),
    }

    _createPerson(BODY, () => {
      resetForm({ Firstname: '', Lastname: '', Email: '', Age: '' });
      setAvatar('');
    });
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.formWrapper}>
            <Text style={styles.title}>Create person</Text>

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

            <CustomButton 
              typeButton={'button'}
              actionButton={'save'}
              textButton={'Create'}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}