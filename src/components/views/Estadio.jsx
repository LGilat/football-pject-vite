import React from 'react'
import '../css/Estadios.css'




export default function Estadio({ estadio }) {

    return (
        <div>
            <div key={estadio.idVenue} className="estadio-card">
                <h2>{estadio.strVenue}</h2>
                <p><strong>Sport:</strong>{estadio.strSport || 'No sport available'}</p>
                {estadio.strThumb && <img src={estadio.strThumb} alt={`${estadio.strVenue} Badge`} className="estadio-badge" />}
                <p><strong>Capacity:</strong> {estadio.intCapacity || 'No capacity available'}</p>
                <p><strong>Location:</strong> {estadio.strLocation || 'No location available'}</p>
                <p><strong>Fundado en:</strong> {estadio.intFormedYear || 'No formed available'}</p>
                <p><strong>Team:</strong> {estadio.strStadiumDescription || 'No team available'}</p>
                <p><strong>Description:</strong> {estadio.strDescriptionEN || 'No description available'}</p>
                <p><strong>Website:</strong> {estadio.strWebsite || 'No website available'}</p>
            </div>
        </div>
    )

}