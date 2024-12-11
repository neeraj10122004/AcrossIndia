import React from 'react'
import { Navbar } from '../components/Navbar'
import {Footer} from '../components/Footer'
import Flight from '../components/Flight'

export const Flights = () => {
  return (
    <div>
      <Navbar loc = "Flights"/>
      <Flight/>
      <Footer/>
    </div>
  )
}
