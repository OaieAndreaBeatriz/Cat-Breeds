import React from 'react';
import { useState, useEffect } from 'react';

import Axios from 'axios';
import '../styles/Breed.css';
import BreedEntry from './BreedEntry';
// import BreedsImg from '../helpers/BreedsImg'

function Breeds() {
  const [breed, setBreed] = useState([]);
  // console.log(Axios.get('https://api.thecatapi.com/v1/breeds'))

  useEffect(() => {
    if (breed === [])
      Axios.get('https://api.thecatapi.com/v1/breeds').then((response) => {
        setBreed(response.data.id);
      });
  }, []);

  // useEffect(() => {
  //   console.log(breed);
  // }, [breed]);

  return (
    <div className='breed'>
      <h1 className='breedTitle'>Find which cat suits you best!</h1>
      {/* <BreedsImg /> */}
      <div className='breedList'>
        {breed && breed.map((elem) => <BreedEntry props={elem} />)}
      </div>
    </div>
  );
}

export default Breeds;
