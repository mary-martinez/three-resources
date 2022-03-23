import React from 'react';

export default function Toys({ colors, name, type, strength }) {
  return (
    <div>
      <h2>{`${name} the ${type}`}</h2>
      <h3>Strength: {strength}</h3>
      <p>Colors: {colors}</p>
    </div>
  );
}
