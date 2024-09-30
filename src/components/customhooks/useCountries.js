import React, {useState, useEffect} from 'react'




const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
};


export default function useCountries({URL_COUNTRIES}) {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        if (!URL_COUNTRIES) return; 
        setLoading(true);
        fetch(URL_COUNTRIES, options)
            .then(response => response.json())
            .then(data => {
                setCountries(data.countries)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => setLoading(false));
    }, [URL_COUNTRIES])

    return {
        countries,
        loading,
        error
    }
}