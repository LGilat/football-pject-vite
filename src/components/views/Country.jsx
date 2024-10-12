import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Countries.css';

const Country = ({ country, href }) => {
  return (
    <div className="country-card">
        <img src={country.flag_url_32} alt={country.name_en} />
      <Link to={href} key={country.name_en}>
        <p>{country.name_en}</p>
      </Link>
    </div>
  );
};

export default Country;
