import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    
    const {name, flags, population, capital, area} = (country);
    const [visited, setVisited] = useState(false);
    // console.log(area.area);

    const handleVisited = () => {
        // Method - 1
        // if(visited){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }

        // Method - 2
        setVisited(visited ? false : true)

        // Method - 3
        // setVisited(!visited)
        
        handleVisitedCountries(country);
    }

    return (
        <div className={`country ${visited && 'country-visited'}` }>
            <img src={flags?.flags?.png} alt="flags.flags.alt" />
            <h3>Name: {name.common}</h3>
            <h4>Capital: {capital.capital}</h4>
            <p>Population: {population.population}</p>
            <p>Area: ({area.area}) {
            area.area > 300000 ? "Big Country." : "Small Country"
            }</p>

            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>

            <button onClick={() => {handleVisitedFlags(flags?.flags?.png)}}>Add Visited Flag</button>
        </div>
    );
};

export default Country;
