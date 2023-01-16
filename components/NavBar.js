import React, {useState} from 'react'
import Logo from '../assets/Cats.png'
import {Link} from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/NavBar.css'

function NavBar() {

  const [openLinks, setOpenLinks] = useState(false)

  const toggleNavBar = () => {
    setOpenLinks(!openLinks)
  }
  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? 'open' : 'close'}>
       <img src={Logo} alt="/"/>
       <div className='hiddenLinks'>
        <Link to='/' onClick={() => {window.location.href="/"}} >Home</Link>
        <Link to='/breed' onClick={() => {window.location.href="/breed"}} >Breeds</Link>
        <Link to='/about' onClick={() => {window.location.href="/about"}} >About</Link>
        <Link to='/contact' onClick={() => {window.location.href="/contact"}} >Contact</Link>
       </div>
      </div>
      <div className='rightSide'>
        <Link to='/' onClick={() => {window.location.href="/"}} >Home</Link>
        <Link to='/breed' onClick={() => {window.location.href="/breed"}} >Breeds</Link>
        <Link to='/about' onClick={() => {window.location.href="/about"}} >About</Link>
        <Link to='/contact' onClick={() => {window.location.href="/contact"}} >Contact</Link>
        <button onClick={toggleNavBar}>
          <ReorderIcon/>
        </button>
      </div>
    </div>
  )
}

export default NavBar
