import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Equipos.css'



export default function Equipo({ team, href }) {

    return (
        <div>
            <div key={team.idTeam} className="team-card">
                <Link to={href} key={team.strTeam} title={team.strTeam} aria-label={`Ver detalles del equipo ${team.strTeam}`}>
                    <h2>{team.strTeam}</h2>
                    {team.strBadge && <img src={team.strBadge} alt={`${team.strTeam} Badge`} className="team-badge" />}
                    <p><strong>Founded:</strong> {team.intFormedYear || 'No founded available'}</p>
                    <p><strong>Sport:</strong> {team.strSport || 'No sports available'}</p>
                    <p><strong>League:</strong> {team.strLeague || 'No league available'}</p>
                    <p><strong>Stadium:</strong> {team.strStadium || 'No Stadium available'} ({team.intStadiumCapacity} capacity)</p>
                    {team.strLocation && <p><strong>Location:</strong> {team.strLocation}</p>}
                    {!team.strLocation && <p><strong>Location:</strong> No location available</p>}
                    {team.strDescriptionEN && (
                        <p className="team-description"><strong>Description:</strong> {team.strDescriptionEN}</p>
                    )}
                    {!team.strDescriptionEN && (
                        <p className="team-description"><strong>Description:</strong> No description available</p>

                    )}
                </Link>
            </div>
        </div>
    )
}