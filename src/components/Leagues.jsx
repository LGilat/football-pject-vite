import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './css/Leagues.css'

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
};

const URL_LEAGUES = 'https://www.thesportsdb.com/api/v1/json/3/all_leagues.php'

export default function Leagues({ country }) {
    const [leagues, setLeagues] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch(URL_LEAGUES, options)
            .then(response => response.json())
            .then(data => {
                setLeagues(data.leagues)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [])
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error.message}</div>
    }

    // Filtrar las ligas según el término de búsqueda
    const filteredLeagues = leagues.filter(league =>
        league.strLeague.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className='label-grid-leagues'>
                <h1 className='bebas-neue-regular'>Leagues</h1>
                <form className="search-form">
                    <input
                        type="text"
                        placeholder="Search for a league..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit">
                        <i className="fas fa-search" />
                    </button>
                </form>
            </div >
            <table className="leagues-table">
                <thead>
                    <tr>
                        <th className='bebas-neue-regular'>League Name</th>
                        <th className='bebas-neue-regular'>Sport</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredLeagues.map(league => (
                        <tr key={league.idLeague}>
                            <td>
                                <Link to={`/teamsleague/${league.strLeague}`}>
                                    {league.strLeague}
                                </Link>
                            </td>
                            <td>{league.strSport || 'No Sport available'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}