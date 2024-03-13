import axios from "axios";

// base url for the back end    
const baseUrl = 'http://localhost:3001/persons';

// fetch initial data and set state
const fetchData = () => {
    const request = axios.get(baseUrl);
    return request.then(res => res.data);
}

// add Person to backend file
const addPerson = (personObj) => {
    return axios.post(baseUrl, personObj);
}

const deletePerson = (id) => {
    // return axios.delete(baseUrl, person);
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then(res => res.data);
}

export default {
    fetchData: fetchData,
    addPerson: addPerson,
    deletePerson: deletePerson
}