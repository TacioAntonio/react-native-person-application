const API = 'http://localhost:3000/';

async function getAllPersons() {
    return await fetch(`${API}persons`)
        .then(data => data.json())
        .catch((error) => console.error(error.json()));
}

async function getPersonById(id) {
    return await fetch(`${API}person/${id}`)
        .then(data => data.json())
        .catch((error) => console.error(error.json()));
}

async function createPerson(body) {
    return await fetch(`${API}person/create`, {
        method: 'POST', 
        body: JSON.stringify(body),
        headers: {
            Accept: 'application/json',
        }
    });
}

async function updatePerson(body) {
    return await fetch(`${API}person/update/${body.Id}`, {
        method: 'PUT', 
        body: JSON.stringify(body),
        headers: {
            Accept: 'application/json',
        }
    });
}

async function deletePerson(id) {
    return await fetch(`${API}person/delete/${id}`, { method: 'DELETE' });
}

module.exports = {
    getAllPersons,
    getPersonById,
    createPerson,
    updatePerson,
    deletePerson
}