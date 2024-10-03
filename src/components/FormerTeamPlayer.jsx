import React, { useState, useEffect} from 'react'
import {  useParams } from 'react-router-dom';



const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
};


export default function FormerTeamPlayer() {
    const { idJugador } = useParams();
    const [formerTeams, setFormerTeams] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const URL_FORMER_TEAMS = 'https://www.thesportsdb.com/api/v1/json/3/lookupformerteams.php?id=' + idJugador;

    useEffect(() => {
        fetch(URL_FORMER_TEAMS, options)
            .then(response => response.json())
            .then(data => {
                setFormerTeams(data.formerteams)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [idJugador])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }


    return (
        <div>
            <h1>Former Teams</h1>
            <div className="former-teams-grid" style={styles.formerTeamsGrid}>
                {
                    formerTeams?.map(formerTeam => (
                        <div key={formerTeam.idFormerTeam}>
                            <h3>{formerTeam.strFormerTeam}</h3>
                            {formerTeam.strBadge && <img src={formerTeam.strBadge} alt={`${formerTeam.strTeam} Badge`} style={styles.formerTeamBadge} />}
                            <p>{formerTeam.strSport}</p>
                            <p>{formerTeam.strPlayer}</p>
                            <p>{formerTeam.strJoined} - {formerTeam.strDeparted}</p>
                        </div>
                    ))

                    || <p style={styles.parrafoWarning} >No former teams found</p>
                }
            </div>
        </div>
    )
}


const styles = {
    formerTeamsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gridAutoRows: 'minmax(200px, auto)',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        margin: '0 auto',
        gap: '20px',
    },
    formerTeamBadge: {
        width: '50px',
        height: '50px',
        marginRight: '10px',
    },
    parrafoWarning:{
        gridColumn: '1 / -1', //
        margin: '0 auto',
        textAlign: 'center',  // Centrar horizontalmente 
        fontWeight: 'bold',
        fontSize: '1.2em',
        border: '2px solid #ccc',
        borderRadius: '5px',
        padding: '40px',
    }
};
