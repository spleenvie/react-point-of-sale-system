import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PosPage from './pages/PosPage'

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/pos" element={<PosPage/>}/>
        </Routes>
    </Router>
  )
}

export default App
