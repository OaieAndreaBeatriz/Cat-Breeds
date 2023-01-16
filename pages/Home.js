import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/backgroundCat3.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
      <div className='headerContainer'>
        <h1>Time spent with cats is never wasted</h1>
        <p>Your pet, our passion!</p>
        <Link to='/breed'>
         <button onClick={() => {window.location.href="/breed"}}>CAT BREEDS</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
