import React, { useState } from 'react'
import useCountries from './customhooks/useCountries'
import Country from './views/Country'
import './css/Countries.css'



const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
};

const URL_COUNTRIES = 'https://www.thesportsdb.com/api/v1/json/3/all_countries.php'


export default function Countries() {
    const { countries, loading, error } = useCountries({ URL_COUNTRIES })
    const [searchQuery, setSearchQuery] = useState('');
    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    const filteredCountries = countries.filter((country) =>
        country.name_en.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <>
            <div className="label-grid-countries">
                <h1 className='bebas-neue-regular'>Countries search</h1>
                <form className="search-form">
                    <input
                        type="search"
                        placeholder="Buscar país..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit">
                        <i className="fas fa-search" />
                    </button>
                </form>
            </div>
            <div className='countries-grid'>
                {filteredCountries?.map(country => (
                    <Country country={country} key={country.name_en} href={`/equipos/${country.name_en}`} />
                ))}

            </div>
        </>
    )

}