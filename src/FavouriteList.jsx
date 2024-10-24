import React from 'react';
import { useGlobalState } from './GlobalState';
import MovieItem from './MovieItem';

const FavoriteList = () => {
  const { state } = useGlobalState();

  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold mb-4">Favorite Movies</h2>
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

export default FavoriteList;
