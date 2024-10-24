import React from 'react';
import { useGlobalState } from './GlobalState';
import MovieItem from './MovieItem';

const Favorites = () => {
  const { state } = useGlobalState(); // Access global state

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Your Favorite Movies</h1>
      {state.favorites.length === 0 ? (
        <p>No favorite movies added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {state.favorites.map((movie, index) => (
            <MovieItem key={index} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
