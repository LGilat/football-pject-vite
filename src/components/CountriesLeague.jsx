import React, {useState} from 'react'
import { Link } from 'react-router-dom';
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

export default function CountriesLeague(){
    const {countries, loading, error} = useCountries({URL_COUNTRIES})
    const [searchTerm, setSearchTerm] = useState('');

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    const filteredCountries = countries?.filter(country =>
        country.name_en.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <>
            <h1>Countries</h1>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: "20px", padding: "10px", width: "300px" }}
            /> 
            <div className='countries-grid'> 
            {filteredCountries?.map(country => (
                <Country country={country} key={country.name_en} href={`/allcountryleague/${country.name_en}`} />
            ))}

            </div>
        </>
    )
}