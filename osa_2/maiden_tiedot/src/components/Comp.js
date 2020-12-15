import React from 'react'


const CountryRender = ({ countries, finder }) => {
    

    function checkCountry(country) {
        return country.name.toLowerCase().search(finder.toLowerCase()) !== -1
    }

    const countriesList = countries
    .filter(checkCountry)
    .map((country, i) => {
        return (
            <>
            <p key={i}>
                {country.name}
            </p>
            </>
        )
    })
    /*const countriesList = countries.map((country, i) =>
    <p key={i}>{country.name}</p>
    )*/
    if (countriesList.length <= 10) {
        return (
            <>
            {countriesList}
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