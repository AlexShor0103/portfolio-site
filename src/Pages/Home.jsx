import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return(
        <div>
            <h1>This is the Home Page</h1>
            <ul>
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

export default Home;