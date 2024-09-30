import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import Equipo from './views/Equipo'
import './css/Equipos.css'


const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
};


export default function Equipos() {
    const { countryname } = useParams();
    const [equipos, setEquipos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const URL_EQUIPOS = 'https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s=Soccer&c=' + countryname

    useEffect(() => {
        fetch(URL_EQUIPOS, options)
            .then(response => response.json())
            .then(data => {
                setEquipos(data.teams)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [countryname])
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error.message}</div>
    }
    return (

        <div>
            <h1>Equipos de {countryname}</h1>
            <div className="teams-grid">
                {equipos?.map(equipo => (
                    <Link to={`/teamdetails/${equipo.strTeam}`} key={equipo.strTeam}>
                        <Equipo key={equipo.idTeam} team={equipo} />
                    </Link>
                ))}
            </div>
        </div>

    )
}