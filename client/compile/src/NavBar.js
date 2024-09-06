import React from "react"
import { Link } from "react-router-dom"

function NavBar(){

    return(
        <nav>
                  <ul>
        <li><Link to="/" id="nav-home">Home</Link></li>
        <li><Link to="/compiler" id="nav-compiler">Compiler</Link></li>
        <li><Link to="/glossary" id="nav-glossary">Glossary</Link></li>
        </ul>
            </nav>
    )
}


export default NavBar