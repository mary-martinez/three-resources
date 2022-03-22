import React from 'react';

export default function Movies({ movies }) {
  console.log(movies);
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id} className='movie'>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
        </div>
      ))}
    </div>
  );
}
