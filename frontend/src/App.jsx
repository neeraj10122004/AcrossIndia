import { useEffect } from 'react'
import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Place } from './pages/Place'
import { Attraction } from './pages/Attraction'
import { Flights } from './pages/Flights'
import { Hotels } from './pages/Hotels'
import { Loading } from './components/Loading'
import { SignUp } from './components/SignUp'
import { SignIn } from './components/SignIn'

function App() {
  const [check, setcheck] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setcheck(!check)
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {check && <div><Loading/></div>}
      {!check &&
      <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/place" element={<Place/>} />
        <Route path="/attraction" element={<Attraction/>} />
        <Route path="/flights" element={<Flights/>} />
        <Route path="/hotels" element={<Hotels/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      </Router>
      </div>
      }
      
    </>
  )
}

export default App
