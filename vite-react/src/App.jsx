import { Routes, Route } from 'react-router-dom'
import GamePage from './GamePage.jsx' // create this next
import HomePage from './HomePage.jsx' // move your existing content here
import Prototype from './Protoype.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/prototype" element={<Prototype />} />
    </Routes>
  )
}

export default App