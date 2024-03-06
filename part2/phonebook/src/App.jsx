import { useEffect, useState } from 'react';
import Search from './components/Search';
import Form from './components/Form';
import List from './components/List';
import axios from 'axios';

const App = () => {
  // state management for person array and onchange input
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchParam, setSearchParam] = useState('');
  const [filterResults, setFilterResults] = useState([]);
  const [persons, setPersons] = useState([]);

  // fetch initial data and set state
  const fetchData = () => {
    axios.get('http://localhost:3001/persons')
      .then((res) => {
        setPersons(res.data);
      });
  }
  // fetch on initial component render
  useEffect(fetchData, []);


  // handle name submission
  const handleSubmit = () => {
    // prevent refresh of page
    event.preventDefault();

    // bool to check if name exists
    let checkExist = false;
    // for each person in book, check exists
    persons.forEach((person) => {
      if (person.name == newName) {
        checkExist = true;
        // alert if user already exists
        alert(`${newName} already added to phonebook`);
      }
    });

    // if exists then return from function
    if(checkExist) {
      return;
    } else {
      // else set new name & number
      setPersons(
        [...persons, {name: newName, number: newNumber}]
      )
    }
    return;
  }
  
  
  // set newName to be current input
  const handleChange = (name) => {
    setNewName(name);
  }

  // update phone number on input change
  const handleNumberChange = (number) => {
    setNewNumber(number);
  }

  // search and filter for names
  const handleSearch = (name) => {
    setSearchParam(name);
    
    setFilterResults(persons.filter((person) => person.name.toLowerCase().includes(name.toLowerCase())));

    return;
  }


  return (
    <div>
      <h2>Phonebook</h2>

      <Search searchParam={searchParam} handleSearch={handleSearch} filterResults={filterResults} />

      <Form handleSubmit={handleSubmit} newName={newName} handleChange={handleChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>

      <List persons={persons} />
      
    </div>
  )
}

export default App
