import React, { useState } from 'react'


const BookRender = ({ persons }) => {
    const person_list = persons.map(person => <p>{person.name}</p>)
    return (
        <>
        {person_list}
        </>
    )
}



const App = () => {
    const [ persons, setPersons] = useState([{ name: 'Arto Hellas' }]) 
    const [ newName, setNewName ] = useState('')

    const handleLineChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const addLine = (event) =>{
        event.preventDefault()
        console.log('button clicked: ', event.target)
        const phonebookObject = {
            name: newName
        }

        setPersons(persons.concat(phonebookObject))
        setNewName('')
    }
  
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={addLine}>
          <div>
            name: <input 
            value={newName}
            onChange={handleLineChange} 
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
