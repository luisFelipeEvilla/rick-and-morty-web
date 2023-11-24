"use client"
import React, { useEffect, useState } from 'react';
import CharacterCard from '@/components/CharacterCard';
import axios from 'axios';

export default function CharacterList() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await axios.get('api/characters');

      setData(res.data.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {loading ?
        <p>loading...</p>
        :
        <div className='flex flex-col items-center justify-center md:flex-row gap-8 flex-wrap'>
          {
            data.map((character) => (
              <CharacterCard
                key={character.id}
                id={character.id}
                name={character.name}
                species={character.species}
                status={character.status}
                image={character.image}
                gender={character.gender}
              />
            ))}
        </div>

      }
    </div>
  );
}

