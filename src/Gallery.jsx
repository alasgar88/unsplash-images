import { isError, useQueries, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useGlobalContext } from './context';
import { checkForMatch } from './friends';

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}&page=1`;

const Gallery = () => {
  let { searchTerm } = useGlobalContext();

  // joke code
  searchTerm = checkForMatch(searchTerm)
    ? checkForMatch(searchTerm)
    : searchTerm;
  //
  const { data, isLoading, isError } = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const { data } = await axios.get(`${url}&query=${searchTerm}`);
      return data;
    },
  });

  if (isLoading) {
    return (
      <section className='image-container'>
        <h4>Loading...</h4>
      </section>
    );
  }

  if (isError) {
    return (
      <section className='image-container'>
        <h4>There was an error...</h4>
      </section>
    );
  }

  if (data.results.length < 1) {
    return (
      <section className='image-container'>
        <h4>No results...</h4>
      </section>
    );
  }
  return (
    <section className='image-container'>
      {data.results.map((item, index) => {
        const url = item?.urls?.regular;
        return <img src={url} alt='' key={item?.id} className='img' />;
      })}
    </section>
  );
};

export default Gallery;
