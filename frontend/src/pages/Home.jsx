import React from 'react'
import { Navbar } from '../components/Navbar'
import { BasicCard } from '../components/BasicCard'
import RunningCard from '../components/RunningCard'
import TitleCard from '../components/TitleCard'

export const Home = () => {
  return (
    <>
    <div>
        <Navbar/>
        <div className='flex px-10 rounded-md  '>
          <RunningCard/>
          <TitleCard/>
        </div>
        
    </div>
    </>
  )
}
