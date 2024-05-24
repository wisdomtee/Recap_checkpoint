import React, { useState } from 'react';

function Filter({ filterMovies }) {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    filterMovies(event.target.value, rating);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
    filterMovies(title, event.target.value);
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="Filter by rating"
        value={rating}
        onChange={handleRatingChange}
      />
    </div>
  );
}

export default Filter;
