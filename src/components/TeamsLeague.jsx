import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Equipo from './views/Equipo'



/**
 * Component to render a list of teams in a given league
 * 
 * The component receives the league name as a parameter and fetches the list of teams from the API.
 * It renders a list of teams with their logos, names and alternate names.
 * 
 * @param {string} league - The name of the league
 */
export default function TeamsLeague() {
    const { league } = useParams();
    const [teams, setTeams] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const URL_TEAMLEAGUE = 'https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=' + league

    useEffect(() => {
        fetch(URL_TEAMLEAGUE)
            .then(response => response.json())
            .then(data => {
                setTeams(data.teams)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [league])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return (
            <div>
              <h2>Error</h2>
              <p>{error.message}</p>
              <p>Status: {error.status}</p>
            </div>
          );
    }

    return (
        <div>
            <h1 aria-label={`Equipos en la liga ${league}`} >Teams in {league}</h1>
            <div className="teams-grid">
                {teams?.map(team => (
                    
                        <Equipo key={team.idTeam} team={team} href={`/teamdetails/${team.strTeam}`}/>
                   
                ))}
            </div>
        </div>
    )
}