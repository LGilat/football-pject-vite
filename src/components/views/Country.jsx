import React from 'react';
import '../css/Countries.css';

const Country = ({ country }) => {
  return (
    <div className="country-card">
      <img src={country.flag_url_32} alt={country.name_en} />
      <h3>{country.name_en}</h3>
    </div>
  );
};

export default Country;
