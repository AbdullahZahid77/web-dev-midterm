import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Films = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://www.omdbapi.com/', {
                    params: {
                        s: "transformers", 
                        apikey: 'e7f91619'
                    }
                });
                setMovies(response.data.Search);
            } catch (error) {
                console.error('Failed to fetch movies:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div>
            {movies.length > 0 ? (
                movies.map(movie => (
                    <div key={movie.imdbID}>
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                        <img src={movie.Poster} alt={`The movie titled: ${movie.Title}`} />
                    </div>
                ))
            ) : (
                <p>No movies found.</p>
            )}
        </div>
    );
};

export default Films;
