import React from 'react';
import './search-bar.component.css';

const Searchbar = ({placeholder, handleChange}) => {
    return (
               <input className="search"
                      type="text"
                      placeholder={placeholder}
                      onChange={handleChange}/>

    )
}

export default Searchbar;