import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();

  const movieDetails = {
    1: { title: 'Inception', description: 'A mind-bending thriller.' },
    2: { title: 'Interstellar', description: 'A space exploration adventure.' },
    3: { title: 'The Dark Knight', description: 'A superhero crime drama.' },
  };

  const movie = movieDetails[id];

  return (
    <div className="p-4">
      {movie ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          <p>{movie.description}</p>
        </>
      ) : (
        <p>Movie not found.</p>
      )}
    </div>
  );
};

export default MovieDetails;
