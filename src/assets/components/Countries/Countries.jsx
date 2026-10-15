import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([])

    const handleVisitedCountries = (country) =>{
       const newCount = [...visitedCountries,country];
       setVisitedCountries(newCount);
    }

    const handleVisitedFlag = (flag) =>{
        const newVisitedFlag = [...visitedFlag,flag]
        setVisitedFlag(newVisitedFlag);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div>
            <h3>Total Country: {countries.length}</h3>
            <p>Total country visited:{visitedCountries.length}</p>
            <p>Total flag visited:{visitedFlag.length}</p>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>

                <div className='visited-flag-container'>
                    {
                        visitedFlag.map((flag,index) => <img key={index} src={flag}></img>)
                    }
                </div>

            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} 
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;