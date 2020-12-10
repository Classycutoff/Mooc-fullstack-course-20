import React, { useState } from 'react'


const BookRender = ({ persons }) => {
    const person_list = persons.map(person => <p>{person.name} {person.number}</p>)
    return (
        <>
        {person_list}
        </>
    )
}

const Finder = () => {

  
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
    const [ newName, setNewName ] = useState('')
    const [newNumber, setNumber] = useState()


    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
      console.log('number event: ', event.target.value)
      setNumber(event.target.value)
    }

    const addLine = (event) =>{
        event.preventDefault()
        console.log('button clicked: ', event.target)
        var name_map = persons.map(person => person.name)
        if (name_map.includes(newName)) {
          alert(`${newName} is already added to the phonebook.`)
        } else {
          const phonebookObject = {
              name: newName,
              number: newNumber
          }
          setPersons(persons.concat(phonebookObject))
          setNewName('')
          setNumber('')
        }
    }
  
    return (
      <div>
        <h2>Phonebook</h2>
        <Finder />
        <form onSubmit={addLine}>
          <div>
            name: <input 
            value={newName}
            onChange={handleNameChange} 
            />
          </div>
          <div>
          number: <input 
            value={newNumber}
            onChange={handleNumberChange}
            />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        <BookRender persons={persons} />
      </div>
    )
  
  }
  
  export default App
