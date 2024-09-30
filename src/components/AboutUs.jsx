import React from 'react';
import './css/AboutUs.css';
// Imagen por defecto del equipo
const teamImage = 'https://via.placeholder.com/150';

// Imagen de fútbol femenino
const womenSoccerImage = 'https://via.placeholder.com/150';

// Imagen de fútbol masculino
const menSoccerImage = 'https://via.placeholder.com/150';

export default function AboutUs() {
    return (
        <div className="about-us-container">
            <h1>About Us</h1>
            <div className="team-section">
                <img src={teamImage} alt="Our Team" className="team-image" />
                <p>
                    Somos un grupo de apasionados por el fútbol, tanto masculino como femenino. Hemos desarrollado esta web para proporcionar información relevante y actualizada sobre las competiciones de fútbol alrededor del mundo. Nuestra pasión por este deporte nos ha llevado a utilizar la API de TheSportsDB, una herramienta poderosa que nos permite acceder a una vasta cantidad de datos sobre ligas, equipos y jugadores.
                </p>
            </div>

            <div className="soccer-section">
                <div className="soccer-block">
                    <img src={menSoccerImage} alt="Men's Soccer" className="soccer-image" />
                    <h2>Fútbol Masculino</h2>
                    <p>
                        Proveemos información detallada sobre ligas y equipos masculinos, estadísticas de jugadores, resultados de partidos y mucho más. Creemos que el fútbol masculino es un gran espectáculo que merece ser cubierto en todas sus formas, y aquí podrás encontrar toda la información que buscas.
                    </p>
                </div>

                <div className="soccer-block">
                    <img src={womenSoccerImage} alt="Women's Soccer" className="soccer-image" />
                    <h2>Fútbol Femenino</h2>
                    <p>
                        También apoyamos la creciente popularidad del fútbol femenino, proporcionando información actualizada sobre ligas femeninas, sus equipos y estrellas. Estamos comprometidos en darle al fútbol femenino la visibilidad que merece, aportando toda la información para que los aficionados puedan disfrutar de sus competiciones favoritas.
                    </p>
                </div>
            </div>

            <div className="mission">
                <h2>Nuestra Misión</h2>
                <p>
                    Nuestra misión es proporcionar una plataforma fácil de usar y accesible para todos los fanáticos del fútbol. Creemos que el deporte une a las personas y queremos contribuir a esa unión a través de la tecnología. Desde ligas populares hasta equipos locales, nuestra meta es brindarte una cobertura lo más completa posible.
                </p>
            </div>
        </div>
    );
}
