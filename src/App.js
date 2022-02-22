import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import pages
import Home from './Pages/Home'
import Destination from './Pages/Destination'
import Crew from './Pages/Crew'
import Technology from './Pages/Technology'
import Error from './Pages/Error'

// import components
import Navbar from './Components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
        {/* <Route path='*' element={<Error />} /> */}
      </Routes>
    </Router>
  )
}

export default App
