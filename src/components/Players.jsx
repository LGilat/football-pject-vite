import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Jugador from './views/Jugador';


const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
};


export default function Jugadores( ){
    const [jugadores, setJugadores] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchTerm, setSearchTerm] = useState("Ronaldo");
    const [sport, setSport] = useState("");
    
    const URL_JUGADORES = 'https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=' + searchTerm
    useEffect(() => {
        fetch(URL_JUGADORES, options)
            .then(response => response.json())
            .then(data => {
                setJugadores(data.player)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [searchTerm])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }


    // Filtrar los jugadores según el término de búsqueda
    const filteredJugadores = jugadores?.filter(jugador => 
        jugador.strPlayer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Filtrar los jugadores según el deporte seleccionado
    const filteredBysport = filteredJugadores?.filter(jugador =>
        jugador.strSport.toLowerCase() === sport.toLowerCase()
    ); 

    const selectPlayers = sport ? filteredBysport : filteredJugadores;


    return (
        <div>
            <h1>Jugadores</h1>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: "20px", padding: "10px", width: "300px" }}
            />

            <select 
                value={sport} 
                onChange={(e) => setSport(e.target.value)}
                style={{ marginBottom: "20px", marginLeft: "10px", padding: "8px", width: "150px" }}
            >
                <option value="">Select a sport</option>
                <option value="Soccer">Soccer</option>
                <option value="Basketball">Basketball</option>
                <option value="Tennis">Tennis</option>
                <option value="Golf">Golf</option>
                <option value="Baseball">Baseball</option>
                <option value="Football">Football</option>
                <option value="Volleyball">Volleyball</option>
            </select>
        



            <div className="players-grid">
                {selectPlayers?.map(jugador => (
                    <Link to={`/players/${jugador.strPlayer}` } key={jugador.idPlayer } >
                        <Jugador key={jugador.idPlayer} jugador={jugador} />
                    </Link>
                ))}
            </div>
        </div>
    )
}