import PersonCard from "../PersonCard/index";

const PersonCardList = ({ persons, _deletePerson, _getPersonById }) => {
    return (persons && persons.map((person, index) => (
        <PersonCard
            key={index}
            {...person}
            _deletePerson={_deletePerson}
            _getPersonById={_getPersonById}
        />)))
}

export default PersonCardList;