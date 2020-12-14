//2.10 puhelinluettelo step5 is done


import React, { useState } from 'react'
import { BookRender, Finder, AddNew } from './components/Comp'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
    const [ newName, setNewName ] = useState('')
    const [newNumber, setNumber] = useState('')
    const [finder, setFinder] = useState('')


    const handleNameChange = (event) => {
        console.log('name change: ', event.target.value)
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

    const handleFinderChange = (event) => {
      console.log('finder value: ', event.target.value)
      setFinder(event.target.value)
    }
  
    return (
      <div>
        <h2>Phonebook</h2>
        <Finder 
        value={finder}
        onChange={handleFinderChange}
        />
        <h2>Add a new</h2>
        <AddNew
        onSubmit={addLine}
        nameValue={newName}
        nameOnChange={handleNameChange}
        numberValue={newNumber}
        numberOnChange={handleNumberChange}
        />
        <h2>Numbers</h2>
        <BookRender 
        persons={persons} 
        filter={finder}
        />
      </div>
    )
  
  }
  
  export default App
