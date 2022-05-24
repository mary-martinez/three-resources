import React from 'react';

export default function Directors({ directors }) {
  return (
    <div>
      {directors.map((director) => (
        <div key={director.id}>
          <h3>{director.name}</h3>
          <p>Born: {director.birthdate}</p>
        </div>
      ))}
    </div>
  );
}
