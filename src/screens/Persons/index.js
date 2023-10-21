import { useEffect, useState } from 'react';
import { ScrollView, Alert } from 'react-native';
import * as yup from 'yup';
import PersonCardList from './components/PersonCardList';
import PersonEditModal from './components/PersonEditModal';
import { getAllPersons, deletePerson, getPersonById, updatePerson } from '../../services/personsService';
import { styles } from './styles';

const Persons = () => {
  const [persons, setPersons] = useState([]);
  const [currentPerson, setCurrentPerson] = useState('');
  const [avatar, setAvatar] = useState('');
  const [errorAvatar, setErrorAvatar] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const { Id, Firstname, Lastname, Email, Age } = currentPerson;

  useEffect(() => { _getAllPersons(); }, [persons]);

  const _getAllPersons = () => getAllPersons().then(data => setPersons(data));

  const _getPersonById = (id) => {
    getPersonById(id).then(data => {
      const { Avatar } = data;

      setCurrentPerson(data);
      setAvatar(Avatar);
      setModalVisible(true);
    }).catch(_ => Alert.alert("Error when trying to find the person"));
  };

  const _updatePerson = (body) => {
    updatePerson(body)
      .then(_ => {
        Alert.alert("Person updated succesfully");
        setModalVisible(false);
      })
      .catch(_ => Alert.alert("Error when trying to update person"))
  }

  const _deletePerson = (id) => {
    deletePerson(id)
      .then(_ => {
        Alert.alert("Person deleted succesfully");
        _getAllPersons();
      })
      .catch(_ => Alert.alert("Error when trying to delete person"))
  }

  const initialValues = { Firstname, Lastname, Email, Age: `${Age}` };
  const validationSchema = yup.object().shape({
    Firstname: yup.string().required('Required field'),
    Lastname: yup.string().required('Required field'),
    Email: yup.string().email('E-mail is invalid').required('Required field'),
    Age: yup.number().required('Required field'),
  });
  const onSubmit = (values) => {
    const { Firstname, Lastname, Email, Age } = values;

    if (!avatar) {
      setErrorAvatar('Avatar is required');
      return;
    }

    const BODY = {
      Id,
      Avatar: avatar,
      Firstname,
      Lastname,
      Email,
      Age: Number(Age),
    }

    _updatePerson(BODY);
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <PersonCardList
          persons={persons}
          _deletePerson={_deletePerson}
          _getPersonById={_getPersonById}
        />
      </ScrollView>

      <PersonEditModal
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        avatar={avatar}
        setAvatar={setAvatar}
        errorAvatar={errorAvatar}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
}

export default Persons;