// ImagenFondo.js
import React from 'react';

const ImagenSubheader = () => {
    return (
        <div
            style={{
                backgroundImage: 'url(../public/survey_background00.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '400px',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: '30%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                }}
            >
                <h1 style={{ color: '#666666e0', fontSize: 68 }}>Fútbol</h1>
                <h2 style={{ color: '#fff', fontSize: 24 }}>
                    El deporte más popular del mundo
                </h2>
                <div style={{ marginTop: 20 }}>
                    <button
                        style={{
                            backgroundColor: '#4CAF50',
                            color: '#fff',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: 5,
                            cursor: 'pointer',
                        }}
                    >
                        <a
                            href="https://www.espn.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#fff', textDecoration: 'none' }}
                        >
                            Noticias de deportes
                        </a>
                    </button>
                    <button
                        style={{
                            backgroundColor: '#FF9800',
                            color: '#fff',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: 5,
                            cursor: 'pointer',
                            marginLeft: 10,
                        }}
                    >
                        <a
                            href="https://www.fifa.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#fff', textDecoration: 'none' }}
                        >
                            Fútbol internacional
                        </a>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ImagenSubheader;