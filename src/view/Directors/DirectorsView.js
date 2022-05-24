import React, { useEffect, useState } from 'react';
import Directors from '../../components/Directors/Directors';
import { fetchDirectors } from '../../services/directors';

export default function DirectorsView() {
  const [error, setError] = useState('');
  const [directors, setDirectors] = useState([]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchDirectors();
        setDirectors(data);
      };
      fetchData();
    } catch (e) {
      setError(e.message);
    }
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      <Directors {...{ directors }} />
    </div>
  );
}
