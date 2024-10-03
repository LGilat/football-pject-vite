import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Jugador from './views/Jugador';

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
};

export default function SearchPlayers() {
    const { query } = useParams();
    const [jugadores, setJugadores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const URL_JUGADORES = 'https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=' + query;

    useEffect(() => {
        fetch(URL_JUGADORES, options)
            .then(response => response.json())
            .then(data => {
                setJugadores(data.player)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
            })
            .finally(setLoading(false))
    }, [query])

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div>
            <h1>Search Players</h1>
            <div className="players-grid">
                {
                    jugadores.map(jugador => (
                        <Link to={`/players/${jugador.idPlayer}`} key={jugador.idPlayer} >
                            <Jugador key={jugador.idPlayer} jugador={jugador} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}