import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import Equipo from './views/Equipo'



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
        return <div>Error: {error.message}</div>
    }

    return (
        <div>
            <h1>Teams in {league}</h1>
            <div className="teams-grid">
                {teams?.map(team => (
                    <Link to={`/teamdetails/${team.strTeam}`} key={team.strTeam}>
                        <Equipo key={team.idTeam} team={team} />
                    </Link>
                ))}
            </div>
        </div>
    )
}