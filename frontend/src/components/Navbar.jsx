import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className=' flex items-center justify-between p-10 '>
      <div className=' flex items-center justify-center gap-10 '>
        <div className=' rounded-full p-3  bg-black text-white '>Icon</div>
        <div><Link to='/'>Home</Link></div>
        <div><Link to='/place'>Place</Link></div>
        <div><Link to='/attraction'>Attraction</Link></div>
        <div><Link to='/flights'>Flights</Link></div>
        <div><Link to='/hotels'>Hotels</Link></div>
        <div><Link to='/about'>About</Link></div>
      </div>
      <div className=' flex items-center justify-center gap-5 ' >
        <div className=' rounded p-1 bg-black text-white ' >SignIn</div>
        <div className=' rounded p-1 bg-black text-white ' >SignUp</div>
        <div className=' rounded-full p-2 bg-black text-white ' >Acc</div>
      </div>
    </div>
  )
}
