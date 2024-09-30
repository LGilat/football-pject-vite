import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import Estadio from './views/Estadio'


const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
};



export default function Estadios() {
    const { estadio } = useParams();
    const [estadios, setEstadios] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const URL_VENUE = 'https://www.thesportsdb.com/api/v1/json/3/searchvenues.php?t=' + estadio;
    console.log(URL_VENUE)

    useEffect(() => {
        fetch(URL_VENUE, options)
            .then(response => response.json())
            .then(data => {
                setEstadios(data.venues)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [estadio])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div>
            <h1>Estadios de {estadio}</h1>
            <div className="sede">
                {estadios?.map(estadio => (

                    <Estadio key={estadio.strVenue} estadio={estadio} />

                ))}
            </div>
        </div>
    )

}