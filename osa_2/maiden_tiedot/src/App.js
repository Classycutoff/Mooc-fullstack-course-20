/*step 2.14 done, I didin't manage to get the REACT_APP_API_KEY={KEY} npm run start to work, 
so I'm using my own API_KEY, which is made with a free email.
*/


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