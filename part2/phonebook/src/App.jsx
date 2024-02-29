import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit = () => {
    event.preventDefault();
    // issue was me trying to use a callback, just reassigning state was what was needed
    setPersons(
      [...persons, {name: newName}]
    );
  }

  const handleChange = (name) => {
    console.log(persons);
    setNewName(name);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {/* important to note (for myself) prevent default runs on the FORM onSubmit, not the button of type submit */}
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input value={newName} onChange={(e) => handleChange(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>Debug: {newName}</div>

      {persons.map((pers, i) => {
        return (<p key={i}>{pers.name}</p>)
      })}

    </div>
  )
}

export default App
