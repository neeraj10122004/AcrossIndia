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
        <div className='flex p-10 '>
          <RunningCard/>
          <TitleCard/>
        </div>
        <div className='flex p-10 gap-10' >
          <BasicCard/>
          <BasicCard/>
          <BasicCard/>
          <BasicCard/>
          <BasicCard/>
        </div>
        
    </div>
    </>
  )
}
