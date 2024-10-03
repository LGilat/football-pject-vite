import React, { useState, useEffect} from 'react'
import {  useParams } from 'react-router-dom';



const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
};


export default function MilestonePlayer() {
    const { idJugador } = useParams();
    const [milestones, setMilestones] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const URL_MILESTONES = 'https://www.thesportsdb.com/api/v1/json/3/lookupmilestones.php?id=' + idJugador;

    useEffect(() => {
        fetch(URL_MILESTONES, options)
            .then(response => response.json())
            .then(data => {
                setMilestones(data.milestones)
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
            <h1>Milestones</h1>
            <div className="milestones-grid">
                {
                    milestones?.map(milestone => (
                        <div key={milestone.idMilestone} style={styles.milestoneGrid}>
                            <h3>{milestone.strMilestone}</h3>
                            {milestone.strMilestoneLogo && <img src={milestone.strMilestoneLogo} alt={`${milestone.strTeam} Badge`} style={styles.milestoneLogo} />}
                            <p>{milestone.strPlayer}</p>
                            <p>{milestone.strSport}</p>
                            <p>{milestone.dateMilestone}</p>
                        </div>
                    ))
                    || <p>No milestones found</p>
                }
            </div>
        </div>
    )
}

const styles = {
    milestoneGrid: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '40%',
        margin: '0 auto',
        marginBottom: '20px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    milestoneLogo: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        marginBottom: '10px',
    },
    
};