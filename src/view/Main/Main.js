import React, { useEffect, useState } from 'react';
import Toys from '../../components/Toys/Toys';
import { getToys } from '../../services/toys';

export default function Main() {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getToys();
      setToys(resp);
    };
    fetchData();
  }, []);

  return (
    <div>
      {toys.map((toy) => (
        <Toys key={(toy.id)} colors={toy.colors} name={toy.name} strength={toy.strength} type={toy.type} />

      ))}
    </div>
  );
}
