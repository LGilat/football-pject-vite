import React from 'react'
import '../css/Jugadores.css'




export default function Jugador({ jugador }) {
    return (
       
            <div  className="jugador-card">
                <h2>{jugador.strPlayer}</h2>
                {jugador.strCutout && <img src={jugador.strCutout} alt={`${jugador.strPlayer} Cutout`} className="jugador-img-cutout" />}
                {!jugador.strCutout && <img src="https://via.placeholder.com/150" alt={`${jugador.strPlayer} Cutout`} className="jugador-img-cutout" />}
                <p><strong>Position:</strong> {jugador.strPosition || 'No position available'}</p>
                <p><strong>Nationality:</strong> {jugador.strNationality || 'No nationality available'}</p>
                <p><strong>Date of Birth:</strong> {jugador.dateBorn || 'No date of birth available'}</p>
                <p><strong>Height:</strong> {jugador.strHeight || 'No height available'}</p>
                <p><strong>Weight:</strong> {jugador.strWeight || 'No weight available'}</p>
                <p><strong>Team:</strong> {jugador.strTeam || 'No team available'}</p>
                <p><strong>Team Badge:</strong> {jugador.strBadge || 'No team badge available'}</p>
                <p className='jugador-descripcion'><strong>Description:</strong> {jugador.strDescriptionEN || jugador.strDescriptionES || 'No description available'}</p>
            </div>
        
    );
}