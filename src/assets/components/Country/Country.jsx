import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries,handleVisitedFlag}) => {
    // const name = country.name.common

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        if (visited) {
            setVisited(false);
        }
        else {
            setVisited(true);
        }

        handleVisitedCountries(country);
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name:{country.name.common}</h2>
            <p>Population: {country.population.population}</p>
            <p>Capital:{country.capital.capital}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "small country"}</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
            <button onClick={()=>{handleVisitedFlag(country.flags.flags.png)}}>Add visited flag</button>
        </div>
    );
};

export default Country;