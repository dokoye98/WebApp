import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Compiler from './Compiler'
import Home from './Home'
import Gloss from './Glossary'
import OutputPage from './OutputPage'

function App() {
  return (
    <Router>
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/compiler">Compiler</Link></li>
                    <li><Link to="/glossary">Glossary</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/compiler" element={<Compiler />} />
                <Route path="/glossary" element={<Gloss />} />
                <Route path="/output/:id" element={<OutputPage />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    </Router>
  )
} 

export default App;
