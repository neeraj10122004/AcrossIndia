import React from 'react'
import { Navbar } from '../components/Navbar'
import { useState } from 'react'

export const Home = () => {
  const [bg, setbg] = useState('bg-open-sea')


  return (
    <div>
        <Navbar/>
        <div className={bg}>jik</div>
    </div>
  )
}
