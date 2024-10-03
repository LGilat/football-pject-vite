import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { YoutubeIcon, InstagramIcon, TwitterIcon, FacebookIcon, TrophyIcon, UsersIcon, FlagIcon } from './Icons'

import './css/PlayerDetails.css'

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
};


export default function PlayerDetails() {
    const { idJugador } = useParams();
    const [player, setPlayer] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const URL_PLAYER_DETAILS = 'https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=' + idJugador;
    useEffect(() => {
        fetch(URL_PLAYER_DETAILS, options)
            .then(response => response.json())
            .then(data => {
                setPlayer(data.players[0])
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
            <h2>Player Details de {player.strPlayer} </h2>
            <div className="player-details">
                <div className="player-details-image">
                    {player.strThumb && <img src={player.strThumb} alt={player.strPlayer} />}
                    {!player.strThumb && <img src={player.strCutout || player.strFanart1 || 'https://via.placeholder.com/300'} alt={player.strPlayer} />}

                </div>
                <div className="player-details-info">
                    <div className="">
                        <h2>{player.strPlayer}</h2>
                        <p>{player.strPosition}</p>
                    </div>
                    <div className="player-pais-localidad">
                        <p>{player.strNationality}</p>
                        <p>{player.strBirthLocation}</p>
                    </div>
                    <div className='player-genero'>
                        <p>{player.strGender}</p>
                        <p>Peso: {player.strWeight}</p>
                        <p>Altura: {player.strHeight}</p>
                    </div>


                    <p >Estado: {player.strStatus || 'Estado no disponible'}</p>

                    <div className='player-details-links'>
                        <Link to={`/player/${player.idPlayer}/honours`}>
                            <TrophyIcon /> Honours
                        </Link>
                        <Link to={`/player/${player.idPlayer}/former-teams`}>
                            <UsersIcon /> Former Teams
                        </Link>
                        <Link to={`/player/${player.idPlayer}/milestones`}>
                            <FlagIcon /> Milestones
                        </Link>

                    </div>

                </div>

                <p className='player-details-info-description'>{player.strDescriptionES || player.strDescriptionEN}</p>

                <div className='player-socialmedia'>
                    <p>
                        <TwitterIcon />
                        <a href={`https://${player.strTwitter}`} title={player.strPlayer}>Twitter</a>  </p>
                    <p>
                        <FacebookIcon />
                        <a href={`https://${player.strFacebook}`} title={player.strPlayer}> Facebook</a>
                    </p>
                    <p>
                        <InstagramIcon />
                        <a href={`https://${player.strInstagram}`} title={player.strPlayer}> Instagram </a>

                    </p>
                    <p>
                        <YoutubeIcon />
                        <a href={`https://${player.strYoutube}`} title={player.strPlayer} > Youtube </a>
                    </p>
                </div>
            </div>
        </div>

    )
}