import React from 'react';
import { useGlobalState } from './GlobalState';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  const { state, addFavorite, removeFavorite } = useGlobalState();
  
  const isFavorite = state.favorites.some((favMovie) => favMovie.title === movie.title);

  return (
    <div className="border p-4 rounded-md shadow-md bg-gray-100">
      <Link to={`/movie/${movie.id}`} className="text-lg font-bold">{movie.title}</Link>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Rating: {movie.rating}</p>

      {isFavorite ? (
        <button
          className="bg-red-500 text-white p-2 rounded-md mt-2"
          onClick={() => removeFavorite(movie)}
        >
          Remove from Favorites
        </button>
      ) : (
        <button
          className="bg-green-500 text-white p-2 rounded-md mt-2"
          onClick={() => addFavorite(movie)}
        >
          Add to Favorites
        </button>
      )}
    </div>
  );
};

export default MovieItem;
