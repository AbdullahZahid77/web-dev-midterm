import React from 'react';
import { useLocation } from 'react-router-dom';
import MovieList from './MovieList';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = useQuery().get('query'); // Get query parameter from the URL

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <MovieList searchTerm={query} /> 
    </div>
  );
};

export default SearchResults;
