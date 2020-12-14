//2.11 puhelinluettelo step6 is done


import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BookRender, Finder, AddNew } from './components/Comp'





const App = () => {
  const [persons, setPersons] = useState([])
    const [ newName, setNewName ] = useState('')
    const [newNumber, setNumber] = useState('')
    const [finder, setFinder] = useState('')

    useEffect(() => {
      console.log('effect')
      axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
    }, [])


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
