import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Compiler from './Compiler';
import Home from './Home';
import Gloss from './Glossary';
import OutputPage from './OutputPage';

function App() {
  return (
    <Router>
        <div>
            <header>
                <h1>Here is the MSc Compiler WebApp</h1>
            </header>
            
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/compiler">Compiler</Link></li>
                    <li><Link to="/glossary">Glossary</Link></li>
                </ul>
            </nav>
            
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <div>
                            <section>
                                <p>This project is primarily focused on teaching users the basics of coding using a basic compiler.</p>
                                <p>Please use this as an entry to tech.</p>
                                <p>Good luck coding!</p>
                            </section>
                            
                            <section>
                                <h2>Project Features</h2>
                                <ul>
                                    <li>Basic string compilation</li>
                                    <li>Abstract Syntax Tree (AST)</li>
                                    <li>Semantic Analysis</li>
                                    <li>Three-Address Code (TAC)</li>
                                    <li>Assembly Code</li>
                                </ul>
                            </section>
                        </div>
                    } 
                />
                <Route path="/compiler" element={<Compiler />} />
                <Route path="/glossary" element={<Gloss />} />
                <Route path="/output/:id" element={<OutputPage />} />
            </Routes>
            
            <footer>
                <p>&copy; MSc Compiler Project</p>
            </footer>
        </div>
    </Router>
  );
}

export default App;
