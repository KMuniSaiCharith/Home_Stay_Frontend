import React from 'react';
import './Module.css'

const SearchBox = () => {
  return (
    <form className="searchBox">
      {['From', 'To', 'Date'].map((label) => (
        <div key={label} className="inputGroup">
          <label htmlFor={`${label.toLowerCase()}Input`} className="inputLabel">
            {label}
          </label>
          <input
            type={label === 'Date' ? 'date' : 'text'}
            id={`${label.toLowerCase()}Input`}
            className="inputField"
            aria-label={label}
          />
        </div>
      ))}
      <div className="searchButton">
        <button type="submit" className="searchButtonText">Search</button>
      </div>
    </form>
  );
};

export default SearchBox;