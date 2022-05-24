import { useState } from 'react';

export default function Search({ setMovieSearch }) {
  const [search, setSearch] = useState('');

  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)}></input>
      <button onClick={() => setMovieSearch(search)}>Search</button>
    </div>
  );
}
