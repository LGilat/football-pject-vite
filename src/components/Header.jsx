import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/HeaderPRU.css';

export default function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() === '') {
            return;
        }
        navigate(`/search/${searchQuery}`);
        setSearchQuery('');
    };
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
                <form className="search-form" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="search-button">🔍</button>
                </form>
            </div>
        </header>
    );
}
