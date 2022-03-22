import React, { useEffect, useState } from 'react';
import Movies from '../../components/Movies/Movies';
import { fetchMovies } from '../../services/movies';

export default function MoviesView() {
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchMovies();
        setMovies(data);
      };
      fetchData();
    } catch (e) {
      setError(e);
    }
  }, []);

  return (
    <div>
      <Movies {...{ movies }} />
    </div>
  );
}
