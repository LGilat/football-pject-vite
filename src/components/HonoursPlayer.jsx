import React, { useState, useEffect} from 'react'
import {  useParams } from 'react-router-dom';
import { TrophyIcon } from './Icons';


const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
};

export default function HonoursPlayer() {
    const { idJugador } = useParams();
    const [honours, setHonours] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const URL_HONOURS = 'https://www.thesportsdb.com/api/v1/json/3/lookuphonours.php?id=' + idJugador;
    useEffect(() => {
        fetch(URL_HONOURS, options)
            .then(response => response.json())
            .then(data => {
                setHonours(data.honours)
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
            <h1>Honours</h1>
            <div className="honours-grid" style={styles.honourGridContainer}>
                {
                    honours?.map(honour => (
                        <div key={honour.idHonour} style={styles.honourGrid}>
                            <h4>{honour.strHonour}</h4>
                            <TrophyIcon />
                            <h5> {honour.strPlayer} </h5>
                            <p>{honour.strTeam}</p>
                            <p>{honour.strSport}</p>
                            <p>{honour.strSeason}</p>
                        </div>
                    ))

                    || <p style={styles.parrafoWarning}  > No honours found </p>
                }
            </div>
        </div>
    )
}


const styles = {
    honourGridContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gridAutoRows: 'minmax(200px, auto)',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        margin: '0 auto',
        gap: '20px',
    },
    honourGrid: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
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
}