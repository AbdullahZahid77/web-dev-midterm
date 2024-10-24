import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?query=${query}`); // Redirect to the search results page
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for movies..." 
        className="p-2"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white">Search</button>
    </form>
  );
}

export default SearchBar;
