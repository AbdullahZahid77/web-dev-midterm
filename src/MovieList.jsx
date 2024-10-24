import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';

const moviesData = [
  { title: 'Inception', releaseDate: '2010-07-16', rating: '8.8' },
  { title: 'Interstellar', releaseDate: '2014-11-07', rating: '8.6' },
  { title: 'The Dark Knight', releaseDate: '2008-07-18', rating: '9.0' },
  { title: 'Fight Club', releaseDate: '1999-10-15', rating: '8.8' },
];

const MovieList = ({ searchTerm }) => {
  const [filteredMovies, setFilteredMovies] = useState(moviesData);

  useEffect(() => {
    if (searchTerm) {
      const results = moviesData.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMovies(results);
    } else {
      setFilteredMovies(moviesData);
    }
  }, [searchTerm]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredMovies.map((movie, index) => (
        <MovieItem key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
