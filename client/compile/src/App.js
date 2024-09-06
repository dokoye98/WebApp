import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Compiler from './Compiler'
import Home from './Home'
import Gloss from './Glossary'
import OutputPage from './OutputPage'
import NavBar from './NavBar'
function App() {
  return (
    <Router>
        <div>
            <NavBar/>
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
