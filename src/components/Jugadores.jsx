import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Jugador from './views/Jugador'
import './css/Jugadores.css'



const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
};


export default function Jugadores() {
    const { teamname } = useParams();
    const [jugadores, setJugadores] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const URL_EQUIPO = 'https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=' + teamname
    useEffect(() => {
        fetch(URL_EQUIPO, options)
            .then(response => response.json())
            .then(data => {
                setJugadores(data.player)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [teamname])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }
    

    return (
        <div className='players-grid'>
            {jugadores?.map(jugador => (
                <Jugador key={jugador.idPlayer} jugador={jugador} />
            ))}
        </div>
       
    )
}