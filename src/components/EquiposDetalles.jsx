import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import DetallesTeam from './views/DetallesTeam'

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
};


export default function EquiposDetalles() {
    const { teamname } = useParams();
    const [equipo, setEquipo] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const URL_EQUIPO = 'https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=' + teamname

    useEffect(() => {
        fetch(URL_EQUIPO, options)
            .then(response => response.json())
            .then(data => {
                setEquipo(data.teams[0])
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


        <div className='team-details'>
            {equipo && (
                <DetallesTeam key={equipo.idTeam} team={equipo} />
            )}
        </div>


    );
}