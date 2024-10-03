import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Countries.css';

const Country = ({ country, href }) => {
  return (
    <div className="country-card">
      <Link to={href} key={country.name_en}>
        <img src={country.flag_url_32} alt={country.name_en} />
        <h3>{country.name_en}</h3>
      </Link>
    </div>
  );
};

export default Country;
