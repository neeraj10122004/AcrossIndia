import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Place } from './pages/Place'
import { Attraction } from './pages/Attraction'
import { Flights } from './pages/Flights'
import { Hotels } from './pages/Hotels'

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/place" element={<Place/>} />
        <Route path="/attraction" element={<Attraction/>} />
        <Route path="/flights" element={<Flights/>} />
        <Route path="/hotels" element={<Hotels/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      </Router>
      
    </>
  )
}

export default App
