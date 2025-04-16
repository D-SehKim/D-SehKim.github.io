import { Routes, Route } from 'react-router-dom'
import GamePage from './Gamepage.jsx' // create this next
import HomePage from './Homepage.jsx' // move your existing content here

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/prototype" element={<Prototypes />} />
    </Routes>
  )
}

export default App