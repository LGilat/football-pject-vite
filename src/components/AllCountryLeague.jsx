import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import League from './views/League'
import './css/Allleague.css'


const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
};


export default function AllCountryLeague(){
    const { country } = useParams();
    const [leagues, setLeagues] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    const URL_LEAGUES = 'https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=' + country;

    useEffect(() => {
        fetch(URL_LEAGUES, options)
            .then(response => response.json())
            .then(data => {
                setLeagues(data.countries)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [country])


    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }


    return (
        <div>
            <h1>AllCountryLeague</h1>
            <div className="league-container">
                {leagues?.map(league => (
                    <League key={league.idLeague} league={league} />
                ))}
            </div>
        </div>
    )
}



