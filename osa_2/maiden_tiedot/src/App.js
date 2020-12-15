//step 2.13 done



import React from 'react'
import { useEffect, useState } from "react"
import axios from 'axios'
import { CountryRender, Finder } from './components/Comp'


const App = () => {
    const [countries, setCountries] = useState([])
    const [finder, setFinder] = useState('')

    const handleFinderChange = (event) => {
        console.log('finder value: ', event.target.value)
        setFinder(event.target.value)
    }


    useEffect(() => {
        console.log('effect hook')
        axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
            console.log('promise fulfilled')
            setCountries(response.data)
        })
    }, [])

    
    return (
        <>
        <div>
            <Finder 
            value={finder}
            onChange={handleFinderChange}
            />
        </div>
        <div>
            <CountryRender 
            countries={countries} 
            finder={finder}
            setFinder={setFinder}
            />
        </div>
        </>
    )
}

export default App