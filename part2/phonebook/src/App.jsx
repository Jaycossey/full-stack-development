import { useState } from 'react'

const App = () => {
  // state management for person array and onchange input
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);


  // handle name submission
  const handleSubmit = () => {
    // prevent refresh of page
    event.preventDefault();

    // // issue was me trying to use a callback, just reassigning state was what was needed
    // setPersons(
    //   [...persons, {name: newName}]
    // );
    let checkExist = false;
    persons.forEach((person) => {
      if (person.name == newName) {
        checkExist = true;
        alert(`${newName} already added to phonebook`);
        console.log(checkExist);
      }
    });

    if(checkExist) {
      return;
    } else {
      setPersons(
        [...persons, {name: newName, number: newNumber}]
      )
    }
    console.log(persons);
    return;

  }
  
  
  // set newName to be current input
  const handleChange = (name) => {
    setNewName(name);
  }

  const handleNumberChange = (number) => {
    setNewNumber(number);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {/* important to note (for myself) prevent default runs on the FORM onSubmit, not the button of type submit */}
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input value={newName} onChange={(e) => handleChange(e.target.value)} />
          Number: <input value={newNumber} onChange={(e) => handleNumberChange(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>Debug: {newName}</div>

      {persons.map((pers, i) => {
        return (<p key={i}>{pers.name}'s Number: {pers.number}</p>)
      })}

    </div>
  )
}

export default App
