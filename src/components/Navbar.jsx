import React from 'react'
import logo from '../assets/nike_logo.png'

export default function Navbar() {
  return (
    <>
    <nav className='flex flex-wrap justify-between items-center'>
      <img className='w-16 h-18' src={logo} alt="arrey bc" />
      <ul className='flex flex-wrap justify-center items-center gap-14'>
        <li><a href="#">MENU</a></li>
        <li><a href="#">LOCATION</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
      <button id='loginButton' className='bg-red-700 text-white w-20 rounded-2xl'>Login</button>
    </nav>
    </>
  )
}
