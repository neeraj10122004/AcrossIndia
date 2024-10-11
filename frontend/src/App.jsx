import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Place } from './pages/Place'
import { Attraction } from './pages/Attraction'
import { Food } from './pages/Food'

 
function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/place" element={<Place/>} />
        <Route path="/attraction" element={<Attraction/>} />
        <Route path="/food" element={<Food/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      </Router>
      
    </>
  )
}

export default App
