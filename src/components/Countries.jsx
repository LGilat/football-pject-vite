import React from 'react'
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


export default function Countries(){
    const {countries, loading, error} = useCountries({URL_COUNTRIES})
    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }


    return (
        <>
            <h1>Countries</h1>
            <div className='countries-grid'> 
            {countries?.map(country => (
                 <Link to={`/equipos/${country.name_en}`} key={country.name_en}>
                     <Country country={country} key={country.name_en} />
                 </Link>
                
            ))}

            </div>
        </>
    )

}