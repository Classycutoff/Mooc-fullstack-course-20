import React from 'react'




const BookRender = ({ persons, filter }) => {
    const person_list = persons.map(function(person, i) {
    if (filter === '') {
        return (
        <p key={i}>{person.name} {person.number}</p>
        )} else {
        const personLow = person.name.toLowerCase()
        const filterLow = filter.toLowerCase()
        if (personLow.search(filterLow) !== -1) {
            return (
            <p key={i}>{person.name} {person.number}</p>
            )
        } else {
            return (
            <p key={i}>
            </p>
            )
        }
        }
    })
    //<p key={i}>{person.name} {person.number}</p>
        return (
            <>
            {person_list}
            </>
        )
}

const Finder = ({value, onChange}) => {
    return (
      <>
      Filter shown with: <input
      value={value}
      onChange={onChange}
      ></input>
      </>
    )
  }
  
  const AddNew = ({ onSubmit, nameValue, nameOnChange, numberValue, numberOnChange}) => {
    return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input 
        value={nameValue}
        onChange={nameOnChange} 
        />
      </div>
      <div>
        number: <input 
          value={numberValue}
          onChange={numberOnChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
    )
  }

export {BookRender, AddNew, Finder}


