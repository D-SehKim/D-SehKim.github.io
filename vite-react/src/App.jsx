import { Routes, Route } from 'react-router-dom'
import GamePage from './GamePage.jsx' // create this next
import HomePage from './HomePage.jsx' // move your existing content here
import GamePage2 from './GamePage2.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/game2" element={<GamePage2 />} />
    </Routes>
  )
}

export default App