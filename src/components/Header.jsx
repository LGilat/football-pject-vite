import React from 'react';
import { Link } from 'react-router-dom';
import './css/HeaderPRU.css';

export default function Header() {
    return (
        <header className="header">
            <div className="logo-container">
                <img src="https://via.placeholder.com/150" alt="Logo" className="logo" />
            </div>
            <nav className="nav-bar">
                <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                    <li><Link to="/leagues">Leagues</Link></li>
                    <li><Link to="/leagues-team">Leagues Team</Link></li>
                    <li><Link to="/countriesleague">Leagues in a Country</Link></li>
                    <li><Link to="/players">Players</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                </ul>
            </nav>
            <div className="search-container">
                <form className="search-form">
                    <input type="text" placeholder="Search..." className="search-input" />
                    <button type="submit" className="search-button">🔍</button>
                </form>
            </div>
        </header>
    );
}
