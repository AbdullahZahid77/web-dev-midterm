import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const movies = [
    { id: 1, title: 'Inception' },
    { id: 2, title: 'Interstellar' },
    { id: 3, title: 'The Dark Knight' },
    { id: 4, title: 'Fight Club' }

  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Trending Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`} className="text-blue-500 hover:underline">
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
