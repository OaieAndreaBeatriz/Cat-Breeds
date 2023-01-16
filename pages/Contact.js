import React from 'react'
import CatVideo1 from '../components/CatVideo'
import '../styles/Contact.css'

function Contact() {

  return (
    <div className='contact'>
      <div className='leftSide' >
        <CatVideo1/>
      </div>
      <div className='rightSide'>
      <h1>Contact Us</h1>

        <form id='contact-form' method='POST'>
          <label htmlFor='name'>Full Name</label>
          <input name='name' placeholder='Enter full name...' type='text'></input>
          <label htmlFor='email'>Email</label>
          <input name='email' placeholder='Enter email...' type='email'></input>
          <label htmlFor='message'>Message</label>
          <textarea rows='6' placeholder='Enter message...' name='message' required></textarea>
          <button type='submit'>Send message</button>

        </form>
      </div>

      
    </div>
  )
}

export default Contact

/* const visibleDetails = ['Name: ','Description: ','Origin: ','Intelligence: ','Life span','Health issues: ','Shedding leve;: ','Temperament: ','Affection level: ','Child friendly: ','Stranger friendly: ','Dog friendly: ','Adaptability: ','Social needs: ','Wheight: ']

let elemName = ''
const result = []
let i = 0;
const getParagraph =  (elem) => {
  const value = elem[visibleDetails[i]];
  elemName = visibleDetails[i][0].toUpperCase() + visibleDetails[i].substring(1);
  i++;
  return <p className='breedInfo'>{elemName + value}</p>;
}

// for(let i=0; i < visibleDetails.length; i++){

// }
*/