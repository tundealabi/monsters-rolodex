import React from 'react';
import "./search-box.style.css";

const SearchField = (props) => {
    const {search:searchField,handleChange} = props;
    return (
        <input className="search-box" 
        name="searchField"
        type="search"
        placeholder="Search Monsters"
        value={searchField}
        onChange={handleChange}
        />
    )
}

export default SearchField;