import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
 
function App() {

  return (
    <>
      <Router>
      <div className=" flex justify-center items-center bg-black text-white ">
        AroundTheWorld
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      </Router>
      
    </>
  )
}

export default App
