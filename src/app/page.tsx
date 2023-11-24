"use client"
import React, { useEffect, useState } from 'react';
import CharacterCard from '@/components/CharacterCard';
import axios from 'axios';
import { Pagination, Stack } from '@mui/material';

export default function CharacterList() {
  const [characters, setCharacters] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagesCount, setPagesCount] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page]);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await axios.get('api/characters', {
        params: {
          page
        }
      });

      setCharacters(res.data.results);
      setPagesCount(res.data.info.pages);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div className='flex flex-col gap-4'>
        {
          loading ?
            <p>loading...</p>
            :
            <div className='flex flex-col items-center justify-center md:flex-row gap-8 flex-wrap'>
              {
                characters.map((character) => (
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
        <div className='flex w-full justify-end'>
          <Stack spacing={2} className='ml-auto' >
            <Pagination
              count={pagesCount}
              page={page}
              onChange={(event, value) => {
                setPage(value);
              }}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}

