import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaGlobe } from 'react-icons/fa';
import '../css/EquiposDetalles.css'


export default function DetallesTeam({ team }) {
    return (
        <div className="team-container">
            <div className="team-details">
                <img src={team.strLogo || team.strBadge} alt={`${team.strName} logo`} className="team-logo" />
                <p><strong>Fundación:</strong> {team.intFormedYear || 'No disponible'}</p>
                <p><strong>Estadio:</strong> 
                    <Link to={`/estadios/${team.strStadium}`} key={team.strTeam}>
                        {team.strStadium || 'No disponible'}
                    </Link> 
                </p>
                <p><strong>Ubicación:</strong> {team.strLocation || 'No disponible'}</p>

                <div className="social-links-container">
                    <a href={`https://${team.strWebsite}`} target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaGlobe className="social-icon" /> Sitio Web
                    </a>
                    <a href={`https://${team.strFacebook}`} target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaFacebook className="social-icon" /> Facebook
                    </a>
                    <a href={`https://${team.strTwitter}`} target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaTwitter className="social-icon" /> Twitter
                    </a>
                    <a href={`https://${team.strInstagram}`} target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaInstagram className="social-icon" /> Instagram
                    </a>
                </div>

                <img className='team-equipment' src={team.strEquipment || team.strBadge} alt={`${team.strName} logo`} width="400" height="400" />

            </div>
            <div className="team-details-container">
                <h1 className="team-name">{team.strTeam}</h1>
                <h3 className="team-alternate">{team.strTeamAlternate}</h3>
                <p className="team-short-name"><strong>Abreviación:</strong> {team.strTeamShort || 'No abreviacion available'}</p>
                <p><strong>Fundado en:</strong> {team.intFormedYear || 'No disponible'}</p>
                <p><strong>Deporte:</strong> {team.strSport || 'No disponible'}</p>
                <p><strong>Estadio:</strong> {team.strStadium || 'No disponible'} (Capacidad: {team.intStadiumCapacity})</p>
                <p><strong>Ubicación:</strong> {team.strLocation}</p>
                <div className="team-leagues">
                    <h4>Competiciones:</h4>
                    <ul>
                        {team.strLeague && <li>{team.strLeague}</li>}
                        {team.strLeague2 && <li>{team.strLeague2}</li>}
                        {team.strLeague3 && <li>{team.strLeague3}</li>}
                        {team.strLeague4 && <li>{team.strLeague4}</li>}
                    </ul>
                </div>
                <p><strong>RSS:</strong> <a href={`${team.strRSS}`} target="_blank" rel="noopener noreferrer">Feed de Noticias</a></p>
                <div className="team-keywords">
                    <strong>Palabras clave:</strong> {team.strKeywords || 'No disponible'}
                </div>
                <div className="team-content">
                    <h4>Descripción:</h4>
                    <p>{team.strDescriptionEN}</p>
                </div>
                <div className="nav-links-players">
                    <Link to={`/jugadores/${team.strTeam}`} className="nav-link">
                        <button className="nav-button">Jugadores</button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

