import React from 'react'
import { Navbar } from '../components/Navbar'
import { BasicCard } from '../components/BasicCard'
import RunningCard from '../components/RunningCard'

export const Home = () => {
  return (
    <>
    <div>
        <Navbar/>
        <div className='flex px-10 h-[10vh] '>
          <RunningCard/>
        </div>
        
    </div>
    </>
  )
}
