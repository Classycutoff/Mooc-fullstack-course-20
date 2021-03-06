import { useEffect, useState } from 'react'
import axios from 'axios'
import React from 'react'

const API_ACCESS_KEY = 'affd5c076ac3bbbb9a2ba264affe84da'
const weather_template = 'http://api.weatherstack.com/'
const API_REQUESTS = weather_template + 'current?access_key=' + API_ACCESS_KEY + '&query='



//This is a template for rendering single countries
const SingleCountry = ({ country, languages, currentWeather, setWeather }) => {

    const capital = country.capital

    useEffect(() => {
        console.log('weather hook')
        axios
        .get(API_REQUESTS + capital)
        .then(response => {
            console.log('promise fulfilled')
            setWeather(response.data)
        })
    }, [])
    console.log('weather: ', capital, currentWeather)

    
    return (
        <>
        <h1>{country.name}</h1>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h2>Languages</h2>
        <ul>
            {languages}
        </ul>
        <h1>Flag of {country.name}</h1>
        <img src={country.flag} alt='the country flag' width='250px' ></img>
        <div>
            <h1>Weather in {country.capital}</h1>
            <p>Temperature: {currentWeather.current.temperature}</p>
            <p><strong>Wind:</strong> {currentWeather.current.wind_speed} mph, direction {currentWeather.current.wind_dir}</p>
        </div>
        </>
    )
}


//This gets the languages of a country
function languages(country) {  
    console.log(country.languages)
    const language_list = country.languages.map(language => {
    return (
        <li key={language.name}>{language.name} or {language.nativeName}</li>
    )})
    return (
        language_list
    )
}


//This combines the multiple different outputs that can happen
const CountryRender = ({ countries, finder, setFinder }) => {

    const [currentWeather, setWeather] = useState({
        'current': {
            'temperature': 0,
            'wind_speed': 0,
            'wind_dir': 'N',
        }
    })

    //This is just for the filter function, which checks which ones are true in the list
    function checkCountry(country) {
        return country.name.toLowerCase().search(finder.toLowerCase()) !== -1
    }

    //Makes the countrylist with everything that is true with the finder
    const countriesList = countries
    .filter(checkCountry)
    .map(country => {
        return (
            <p key={country.alpha3Code}>
                {country.name} <button onClick={() => setFinder(country.name)}>show</button>
            </p>
        )
    })


    if (countriesList.length <= 10 && countriesList.length > 1) {
        return (
            <>
            {countriesList}
            </>
        )


    } else if (countriesList.length === 1) {

        //This is horrible piece of spaghetti that is mashed together. I'm not certain if I like js.
        const strippedCountry = countriesList[0]['props']['children'][0]
        console.log('strippedCountry: ', strippedCountry)

        //For filter function
        function getCountry(country) {
            return country.name === strippedCountry
        }

        const country =  countries.filter(getCountry)[0]
        console.log('country object: ', country)


        return (
            <SingleCountry 
            country={country} 
            languages={languages(country)}
            currentWeather={currentWeather}
            setWeather={setWeather} 
            />
        )
    } else if (countriesList.length === 0) {
        return (
            <>
            <p key='No_countries'>No countries.</p>
            </>
        )
    } else {
        return(
        <>
        <p key='too many matches'>
            Too many matches, specify another filter.
        </p>
        </>
    )}
}


//Gets the values of the finder input
const Finder = ({ value, onChange }) => {
    return (
        <>
        Find Countries: <input
        value={value}
        onChange={onChange}
        ></input>
        </>
    )
}

export { CountryRender, Finder }