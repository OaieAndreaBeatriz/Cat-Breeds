import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';

import '../styles/ExpandButton.css';
import '../styles/Breed.css';
import '../styles/Button.css';
import Details from '../helpers/Details';

function Breeds() {
  // const [breed, setBreed] = useState([]);

  // useEffect(async () => {
  //   console.log('[ X ] ');
  //   if (breed === []) {
  //     const result = await Axios.get('https://api.thecatapi.com/v1/breeds');
  //     console.log('[ Z ] ');
  //     setBreed(result.data.id);
  //   }
  //   // await Axios.get('https://api.thecatapi.com/v1/breeds').then(
  //   //   (response) => {
  //   //     console.log(response);
  //   //     setBreed(response.data.id);
  //   //   }
  //   // );
  // }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     console.log('[ X ] ');
  //     const response = await Axios.get('https://api.thecatapi.com/v1/breeds');
  //     console.log(response);

  //     setBreed(response.data);
  //     // ...
  //   }
  //   fetchData();
  // }, []);

  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await Axios.get(`https://api.thecatapi.com/v1/breeds`);
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  // const [extended, setExtended] = useState(false);
  // setExtended();

  function expand() {
    let coll = document.getElementsByClassName('collapsible');
    let i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }
  }

  return (
    <div className='breed'>
      <h1 className='breedTitle'>Find which cat suits you best!</h1>
      {/* <BreedsImg /> */}
      <div className='breedList'>
        {data.map((item, index) => {
          return (
            <div>
              <div className='breedItem' key={index}>
                <div className='breed'>
                  <div>
                    <h2 className='breedInfo'>{item.name}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
              <div>
                <button className='button-89' role='button'>
                  see more details
                </button>
                <div className='content'>{Details}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Breeds;
