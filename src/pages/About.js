import React from 'react';
import CatImage from '../assets/cats.jpeg';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
      <div
        className='aboutTop'
        style={{ backgroundImage: `url(${CatImage})` }}
      ></div>
      <div className='aboutBottom'>
        <h1> ABOUT US </h1>
        <p className='aboutTop'>
          There comes a time in every person s life when they are ready to take
          their love to pets from watching adorable YouTube cat videos to the
          next step. Getting a pet cat might sound very easy and, in fact, it is
          but it is the process of becoming its owner that might need some
          practice. Therefore, some guidelines might be of great use. If the
          mere sight of cat-related issues no longer seems disturbing, it is,
          perhaps, the time to choose what type of a cat one would like to have
          in their house. The choice between a cat of pedigree and the one from
          a pet shelter may be very complicated.
        </p>
      </div>
    </div>
  );
}

export default About;
