import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who enters the dreams of others to steal secrets.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 8.8
    },
    // Add more movies here
  ]);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filterMovies = (title, rating) => {
    // Implement filtering logic based on title and rating
  };

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter filterMovies={filterMovies} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
