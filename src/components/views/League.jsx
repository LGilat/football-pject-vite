import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Allleague.css'




export default function League({ league }) {
    return (
        <div key={league.idLeague} className="cardLeague">
          <Link to={`/teamsleague/${league.strLeague}`}>   <h2>{league.strLeague}</h2> </Link>
            {league.strBadge && <img src={league.strBadge} alt={`${league.strLeague} Badge`} className="leaguebadge" />}
            <p><strong>Sport:</strong> {league.strSport || 'No sports available'}</p>
            <p><strong>Country:</strong> {league.strCountry || 'No country available'}</p>
            <p><strong>League:</strong> {league.strLeague || 'No league available'}</p>
            <p><strong>Formed:</strong> {league.intFormedYear || 'No Formed available'}</p>
            <p><strong>Season:</strong> {league.strCurrentSeason || 'No Season available'}</p>
            <p><strong>Facebook:</strong> {league.strFacebook && <a href={`https://${league.strFacebook}`} target="_blank"> Ir a la página  </a> || 'No Facebook available'} </p>
            <p><strong>Instagram:</strong> {league.strInstagram && <a href={`https://${league.strInstagram}`}  target="_blank">  Ir a la página </a> || 'No Instagram available'}</p>
            <p><strong>Twitter:</strong> {league.strTwitter && <a href={`https://${league.strTwitter}`}  target="_blank"> Ir a la página</a> || 'No Twitter available'}  </p>
            <p><strong>Youtube:</strong> {league.strYoutube && <a href={`https://${league.strYoutube}` } target='_blank'> Ir al canal</a> || 'No Youtube available'} </p>
            <p><strong>RSS:</strong> {league.strRSS || 'No RSS available'}</p>
            {/* <p><strong>Description:</strong> {league.strDescriptionEN || 'No Description available'}</p> */}
        </div>

    );
}