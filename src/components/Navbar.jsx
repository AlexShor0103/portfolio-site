import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
function Navbar() {
    return(
        <div className='Navbar'>
            <h1>This is the navbar</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Projects">Projects</Link>
                </li>
                <li>
                    <Link to="/Resume">Resume</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;