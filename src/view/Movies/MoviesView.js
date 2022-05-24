import React, { useEffect, useState } from 'react';
import Movies from '../../components/Movies/Movies';
import Search from '../../components/Search/Search';
import { fetchMovies } from '../../services/movies';

export default function MoviesView() {
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState('');

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchMovies(movieSearch);
        setMovies(data);
      };
      fetchData();
    } catch (e) {
      setError(e.message);
    }
  }, [movieSearch]);

  return (
    <div>
      {error && <p>{error}</p>}
      <Search setMovieSearch={setMovieSearch} />
      <Movies {...{ movies }} />
    </div>
  );
}
